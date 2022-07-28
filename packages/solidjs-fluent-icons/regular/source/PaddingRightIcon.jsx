import { splitProps } from "solid-js"
function PaddingRightIcon(props) {
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
			<path d="M15.85 9.85a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7.7L14.29 9H4.5a.5.5 0 000 1h9.8l-3.65 3.65a.5.5 0 00.7.7l4.5-4.5zM3 3.5a.5.5 0 00-1 0v12a.5.5 0 001 0v-12zm15 0a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm0 3a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm0 4a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm0 4a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" />
		</svg>
	)
}
export default PaddingRightIcon
