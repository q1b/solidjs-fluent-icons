import { splitProps } from "solid-js"
function Component2DoubleTapSwipeUpIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
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
			<path d="M10 8.29v1.58a5.5 5.5 0 104.21.1l-.2-.1V8.3a7 7 0 11-4.26.08l.25-.08zm0 2.68v1.8A3 3 0 0012 18a3 3 0 002.14-5.1l-.14-.14v-1.8a4.5 4.5 0 11-4.2.1l.2-.1zm1.39-8.76a1 1 0 011.22 0l.1.08 3 3 .08.1a1 1 0 010 1.22l-.08.1-.1.08a1 1 0 01-1.22 0l-.1-.08L13 5.4V15a1 1 0 01-2 .12V5.4l-1.3 1.3-.09.08a1 1 0 01-1.4-1.4l.08-.1 3-3 .1-.08z" />
		</svg>
	)
}
export default Component2DoubleTapSwipeUpIcon
