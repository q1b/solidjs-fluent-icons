import { splitProps } from "solid-js"
function AlignCenterVerticalIcon(props) {
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
			<path d="M10.5 18a.5.5 0 01-.5-.5V16H8a2 2 0 01-2-2v-1c0-1.1.9-2 2-2h2V9H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4V2.5a.5.5 0 011 0V4h4a2 2 0 012 2v1a2 2 0 01-2 2h-4v2h2a2 2 0 012 2v1a2 2 0 01-2 2h-2v1.5a.5.5 0 01-.5.5z" />
		</svg>
	)
}
export default AlignCenterVerticalIcon
