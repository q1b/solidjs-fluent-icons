import { splitProps } from "solid-js"
function CircleLineIcon(props) {
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
			<path d="M3.02 9.5h13.96a7 7 0 00-13.96 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm14.98.5H3.02a7 7 0 0013.96 0z" />
		</svg>
	)
}
export default CircleLineIcon
