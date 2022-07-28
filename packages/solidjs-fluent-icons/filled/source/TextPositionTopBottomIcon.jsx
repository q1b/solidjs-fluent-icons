import { splitProps } from "solid-js"
function TextPositionTopBottomIcon(props) {
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
			<path d="M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75zm0 12c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75zm5-7a2.25 2.25 0 014.5 0v5a.75.75 0 001.5 0v-5a3.75 3.75 0 10-7.5 0v5a.75.75 0 001.5 0v-5z" />
		</svg>
	)
}
export default TextPositionTopBottomIcon
