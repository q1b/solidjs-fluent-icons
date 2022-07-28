import { splitProps } from "solid-js"
function ArrowUpLeftIcon(props) {
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
			<path d="M11.5 4a.5.5 0 000-1h-8a.5.5 0 00-.5.5v8a.5.5 0 001 0V4.7l12.15 12.15a.5.5 0 00.7-.7L4.71 4h6.79z" />
		</svg>
	)
}
export default ArrowUpLeftIcon
