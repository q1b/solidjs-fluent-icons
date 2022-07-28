import { splitProps } from "solid-js"
function ChevronDoubleLeftIcon(props) {
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
			<path d="M11.27 15.8a.75.75 0 01-1.06-.03l-5-5.25a.75.75 0 010-1.04l5-5.25a.75.75 0 111.08 1.04L6.8 10l4.5 4.73c.29.3.28.78-.02 1.06zm4 0a.75.75 0 01-1.06-.03l-5-5.25a.75.75 0 010-1.04l5-5.25a.75.75 0 111.09 1.04L10.79 10l4.5 4.73c.3.3.28.78-.02 1.06z" />
		</svg>
	)
}
export default ChevronDoubleLeftIcon
