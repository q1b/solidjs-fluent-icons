import { splitProps, ComponentProps, JSX } from "solid-js"

function CropInterimOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M3.02 3.73l-.87-.88a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-1.2-1.2A5.47 5.47 0 019 15.78v.72a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-.85a4.49 4.49 0 005.56.92l-1.94-1.94L13 14a2 2 0 01-1.73-1H5.73a2 2 0 11-1.96-2.99l.47-4.16a2 2 0 01-1.22-2.12zm8 8L5.27 5.98a2 2 0 01-.04 0l-.47 4.17A2 2 0 016 12h5c0-.1 0-.18.02-.27zm.75-5.74l.46 4.12 2.63 2.63A2 2 0 0013.23 10l-.47-4.16A2 2 0 1010.26 3H6.74a2 2 0 00-2.47-.86l.87.87a1 1 0 01.86.86l.87.87A2 2 0 007 4h3a2 2 0 001.77 1.99zm4.92 8.58l.72.72a5.5 5.5 0 00-3.56-8.72l.12 1.03a4.5 4.5 0 012.72 6.97zM12 5a1 1 0 110-2 1 1 0 010 2zm-9 7a1 1 0 102 0 1 1 0 00-2 0z" />
		</svg>
	)
}
export default CropInterimOffIcon
