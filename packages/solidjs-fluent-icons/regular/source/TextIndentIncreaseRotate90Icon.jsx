import { splitProps } from "solid-js"
function TextIndentIncreaseRotate90Icon(props) {
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
			<path d="M8.85 2.65a.5.5 0 10-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 00-.7-.7L10 3.79 8.85 2.65zM6 7.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm9 0a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm-5.5 10v-10a.5.5 0 011 0v10a.5.5 0 01-1 0z" />
		</svg>
	)
}
export default TextIndentIncreaseRotate90Icon
