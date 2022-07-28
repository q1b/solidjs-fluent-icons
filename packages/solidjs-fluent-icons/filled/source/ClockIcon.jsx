import { splitProps } from "solid-js"
function ClockIcon(props) {
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
			<path d="M10 2a8 8 0 110 16 8 8 0 010-16zm-.5 3a.5.5 0 00-.5.5v5.09a.5.5 0 00.5.41h3.09a.5.5 0 00-.09-1H10V5.41A.5.5 0 009.5 5z" />
		</svg>
	)
}
export default ClockIcon
