import { splitProps } from "solid-js"
function TextIndentIncreaseRotate270Icon(props) {
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
			<path d="M10 2c.28 0 .5.22.5.5v10a.5.5 0 01-1 0v-10c0-.28.22-.5.5-.5zM6 5.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm9 0a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm-3.85 11.85a.5.5 0 00.7-.7l-1.5-1.5a.5.5 0 00-.7 0l-1.5 1.5a.5.5 0 00.7.7L10 16.21l1.15 1.14z" />
		</svg>
	)
}
export default TextIndentIncreaseRotate270Icon
