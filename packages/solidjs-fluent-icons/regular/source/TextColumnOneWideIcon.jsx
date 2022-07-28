import { splitProps } from "solid-js"
function TextColumnOneWideIcon(props) {
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
			<path d="M3.5 5a.5.5 0 000 1h13a.5.5 0 000-1h-13zm0 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zM3 11.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h13a.5.5 0 000-1h-13z" />
		</svg>
	)
}
export default TextColumnOneWideIcon
