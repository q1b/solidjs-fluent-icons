import { splitProps } from "solid-js"
function TextboxAlignMiddleRotate90Icon(props) {
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
			<path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm8.5 0a.5.5 0 00-.5.5v9a.5.5 0 001 0v-9a.5.5 0 00-.5-.5zM9 5.5a.5.5 0 00-1 0v9a.5.5 0 001 0v-9z" />
		</svg>
	)
}
export default TextboxAlignMiddleRotate90Icon
