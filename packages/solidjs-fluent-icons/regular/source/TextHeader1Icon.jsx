import { splitProps } from "solid-js"
function TextHeader1Icon(props) {
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
			<path d="M16.55 4a.5.5 0 01.45.5v11a.5.5 0 01-1 0V6.73a8.58 8.58 0 01-2.22 2.19.5.5 0 11-.56-.84 6.76 6.76 0 002.83-3.8.5.5 0 01.5-.28zM2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 111 0v11a.5.5 0 01-1 0V10H3v5.5a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default TextHeader1Icon
