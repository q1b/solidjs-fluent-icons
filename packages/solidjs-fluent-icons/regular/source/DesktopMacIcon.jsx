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
			<path d="M2 4c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-4v1a1 1 0 001 1h.5a.5.5 0 010 1h-7a.5.5 0 010-1H7a1 1 0 001-1v-1H4a2 2 0 01-2-2V4zm1 8v1a1 1 0 001 1h12a1 1 0 001-1v-1H3zm14-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v7h14zm-5.73 6a2 2 0 01-.27-1v-1H9v1a2 2 0 01-.27 1h2.54z" />
		</svg>
	)
}
export default DesktopMacIcon
