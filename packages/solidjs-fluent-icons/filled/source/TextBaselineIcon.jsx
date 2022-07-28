import { splitProps } from "solid-js"
function TextBaselineIcon(props) {
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
			<path d="M10.7 3.47a.75.75 0 00-1.4 0l-3.75 9.5a.75.75 0 001.4.56l1.2-3.03h3.7l1.2 3.03a.75.75 0 001.4-.56l-3.75-9.5zM11.27 9H8.73L10 5.8 11.27 9z" />
			<path d="M2.5 16a.5.5 0 000 1h15a.5.5 0 000-1h-15z" />
		</svg>
	)
}
export default TextBaselineIcon
