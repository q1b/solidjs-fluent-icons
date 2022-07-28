import { splitProps } from "solid-js"
function TextAlignCenterRotate90Icon(props) {
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
			<path d="M15.75 4c.41 0 .75.34.75.75v10.5a.75.75 0 01-1.5 0V4.75c0-.41.34-.75.75-.75zm-5-2c.41 0 .75.34.75.75v14.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zM6.5 6.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" />
		</svg>
	)
}
export default TextAlignCenterRotate90Icon
