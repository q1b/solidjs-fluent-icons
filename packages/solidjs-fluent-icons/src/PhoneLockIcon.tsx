import { splitProps, ComponentProps, JSX } from "solid-js"

function PhoneLockIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v5.04a3.02 3.02 0 00-1 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v12a1 1 0 001 1h3v1H7a2 2 0 01-2-2V4zm3.5 10H10v1H8.5a.5.5 0 010-1zm4-2v1H12a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
		</svg>
	)
}
export default PhoneLockIcon
