import { splitProps } from "solid-js"
function ArrowTrendingDownIcon(props) {
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
			<path d="M17.94 14.54a.75.75 0 01-.7.46h-5.49a.75.75 0 010-1.5h3.69L10.5 8.56l-1.97 1.97c-.3.3-.77.3-1.06 0L2.22 5.28a.75.75 0 011.06-1.06L8 8.94l1.97-1.97c.3-.3.77-.3 1.06 0l5.47 5.47V8.75a.75.75 0 011.5 0v5.5c0 .1-.02.2-.06.29z" />
		</svg>
	)
}
export default ArrowTrendingDownIcon
