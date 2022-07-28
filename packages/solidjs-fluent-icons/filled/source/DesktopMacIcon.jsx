import { splitProps } from "solid-js"
function DesktopMacIcon(props) {
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
			<path d="M4 2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h4v1a1 1 0 01-1 1h-.5a.5.5 0 000 1h7a.5.5 0 000-1H13a1 1 0 01-1-1v-1h4a2 2 0 002-2V4a2 2 0 00-2-2H4zM3 13v-1h14v1a1 1 0 01-1 1H4a1 1 0 01-1-1zm5.73 4A2 2 0 009 16v-1h2v1c0 .36.1.7.27 1H8.73z" />
		</svg>
	)
}
export default DesktopMacIcon
