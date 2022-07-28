import { splitProps } from "solid-js"
function ArrowCircleDownIcon(props) {
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
			<path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-4.65.85a.5.5 0 00-.7-.7l-2.15 2.14V6.5a.5.5 0 00-1 0v5.8l-2.15-2.15a.5.5 0 00-.7.7l3 3c.2.2.5.2.7 0l3-3z" />
		</svg>
	)
}
export default ArrowCircleDownIcon
