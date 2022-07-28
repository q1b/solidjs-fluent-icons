import { splitProps } from "solid-js"
function TextAlignJustifyRotate90Icon(props) {
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
			<path d="M15.5 2c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zm-5 0c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zM6 2.5a.5.5 0 00-1 0v15a.5.5 0 001 0v-15z" />
		</svg>
	)
}
export default TextAlignJustifyRotate90Icon
