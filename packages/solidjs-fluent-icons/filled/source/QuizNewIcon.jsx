import { splitProps } from "solid-js"
function QuizNewIcon(props) {
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1a5.48 5.48 0 01-.4-4H5.5a.5.5 0 010-1h4.1A5.5 5.5 0 0117 9.6V5.5A2.5 2.5 0 0014.5 3h-9zm0 11h2a.5.5 0 010 1h-2a.5.5 0 010-1zM8 5c.2 0 .38.12.46.3l2 4.5a.5.5 0 11-.92.4L9.01 9H6.99l-.53 1.2a.5.5 0 01-.92-.4l2-4.5A.5.5 0 018 5zm.56 3L8 6.73 7.44 8h1.12zm4.94-2.5v1h1a.5.5 0 010 1h-1v1a.5.5 0 01-1 0v-1h-1a.5.5 0 010-1h1v-1a.5.5 0 011 0zm5.5 9a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default QuizNewIcon
