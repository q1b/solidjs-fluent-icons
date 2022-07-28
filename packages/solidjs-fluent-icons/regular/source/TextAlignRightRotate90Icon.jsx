import { splitProps } from "solid-js"
function TextAlignRightRotate90Icon(props) {
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
			<path d="M15.5 6c.28 0 .5.22.5.5v11a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5zm-5-4c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zM6 9.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8z" />
		</svg>
	)
}
export default TextAlignRightRotate90Icon
