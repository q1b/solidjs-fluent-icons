import { splitProps, ComponentProps, JSX } from "solid-js"

function ImageCopyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.5 7.5a1 1 0 100-2 1 1 0 000 2zM5 6a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H8a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v6c0 .37.1.72.28 1.02L9.79 9.5a1.71 1.71 0 012.42 0l3.51 3.52A2 2 0 0016 12V6a2 2 0 00-2-2H8zm7.02 9.72l-3.52-3.51a.71.71 0 00-1 0l-3.52 3.51A2 2 0 008 14h6a2 2 0 001.02-.28zM12 17a3 3 0 002.24-1H7.5A3.5 3.5 0 014 12.5V5.76A3 3 0 003 8v4.5A4.5 4.5 0 007.5 17H12z" />
		</svg>
	)
}
export default ImageCopyIcon
