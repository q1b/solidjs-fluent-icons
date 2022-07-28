import { splitProps } from "solid-js"
function ErrorCircleIcon(props) {
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
			<path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zM10 6a.5.5 0 00-.5.41v4.68a.5.5 0 001 0V6.41A.5.5 0 0010 6z" />
		</svg>
	)
}
export default ErrorCircleIcon
