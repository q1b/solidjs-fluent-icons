import { splitProps } from "solid-js"
function PanelSeparateWindowIcon(props) {
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
			<path d="M3 2a2 2 0 00-2 2v4c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H3zm0 12v-3h1v3a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-3V4h3a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
		</svg>
	)
}
export default PanelSeparateWindowIcon
