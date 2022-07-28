import { splitProps } from "solid-js"
function SwipeUpIcon(props) {
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
			<path d="M10.35 2.15a.5.5 0 00-.7 0l-3 3a.5.5 0 10.7.7L9.5 3.71V14.5a.5.5 0 001 0V3.7l2.15 2.15a.5.5 0 00.7-.7l-3-3zM6 14a4 4 0 012.5-3.7v1.1a3 3 0 103 0v-1.1A4 4 0 116 14z" />
		</svg>
	)
}
export default SwipeUpIcon
