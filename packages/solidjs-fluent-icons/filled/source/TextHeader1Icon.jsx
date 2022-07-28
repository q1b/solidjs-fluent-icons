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
			<path d="M16.57 3.82a.74.74 0 00-.8.1.75.75 0 00-.26.43 6.52 6.52 0 01-2.68 3.53.75.75 0 10.84 1.24 8.77 8.77 0 001.83-1.65v8.03a.75.75 0 001.5 0V4.52a.75.75 0 00-.43-.7zM3.5 4.5a.75.75 0 10-1.5 0v11a.75.75 0 001.5 0v-5h5v5a.75.75 0 001.5 0v-11a.75.75 0 10-1.5 0V9h-5V4.5z" />
		</svg>
	)
}
export default TextHeader1Icon
