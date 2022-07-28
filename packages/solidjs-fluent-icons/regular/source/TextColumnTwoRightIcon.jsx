import { splitProps } from "solid-js"
function TextColumnTwoRightIcon(props) {
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
			<path d="M17 5.5a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm-6 0a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5zm6 3a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm-6 0a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5zm6 3a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm-6 0a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5zm6 3a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm-6 0a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default TextColumnTwoRightIcon
