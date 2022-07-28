import { splitProps } from "solid-js"
function PollIcon(props) {
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
			<path d="M8 4a2 2 0 114 0v12a2 2 0 11-4 0V4zm2-1a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm-8 9a2 2 0 114 0v4a2 2 0 11-4 0v-4zm2-1a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm12-5a2 2 0 00-2 2v8a2 2 0 104 0V8a2 2 0 00-2-2zm-1 2a1 1 0 112 0v8a1 1 0 11-2 0V8z" />
		</svg>
	)
}
export default PollIcon
