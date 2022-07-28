import { splitProps } from "solid-js"
function TextIndentIncreaseRtlIcon(props) {
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
			<path d="M5 4.5c0-.28.22-.5.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zm-3 5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM7.5 14a.5.5 0 000 1h6a.5.5 0 000-1h-6zm10.37-6.26a.5.5 0 00-.71 0l-1.41 1.41a.5.5 0 000 .7l1.41 1.42a.5.5 0 10.7-.7L16.82 9.5l1.06-1.06a.5.5 0 000-.7z" />
		</svg>
	)
}
export default TextIndentIncreaseRtlIcon
