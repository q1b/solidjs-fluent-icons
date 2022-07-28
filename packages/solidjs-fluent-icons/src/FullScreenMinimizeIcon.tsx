import { splitProps, ComponentProps, JSX } from "solid-js"

function FullScreenMinimizeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14 5a1 1 0 001 1h2a.5.5 0 010 1h-2a2 2 0 01-2-2V3a.5.5 0 011 0v2zM6 15a1 1 0 00-1-1H3a.5.5 0 010-1h2a2 2 0 012 2v2a.5.5 0 01-1 0v-2zm8 0a1 1 0 011-1h2a.5.5 0 000-1h-2a2 2 0 00-2 2v2a.5.5 0 001 0v-2zM5 6a1 1 0 001-1V3a.5.5 0 011 0v2a2 2 0 01-2 2H3a.5.5 0 010-1h2z" />
		</svg>
	)
}
export default FullScreenMinimizeIcon
