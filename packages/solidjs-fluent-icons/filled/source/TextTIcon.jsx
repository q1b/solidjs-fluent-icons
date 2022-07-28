import { splitProps } from "solid-js"
function TextTIcon(props) {
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
			<path d="M4 3.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0V4.5h-3.5v11h1.25a.75.75 0 010 1.5h-4a.75.75 0 010-1.5H9v-11H5.5v.75a.75.75 0 01-1.5 0v-1.5z" />
		</svg>
	)
}
export default TextTIcon
