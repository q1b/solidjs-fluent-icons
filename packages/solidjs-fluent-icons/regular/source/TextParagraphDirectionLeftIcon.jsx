import { splitProps } from "solid-js"
function TextParagraphDirectionLeftIcon(props) {
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
			<path d="M11.5 3a4 4 0 100 8H13v6.5a.5.5 0 001 0V4h1v13.5a.5.5 0 001 0V4h.5a.5.5 0 000-1h-5zM13 4v6h-1.5a3 3 0 010-6H13zM5.85 7.65a.5.5 0 00-.7 0l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L4.21 10l1.64-1.65a.5.5 0 000-.7z" />
		</svg>
	)
}
export default TextParagraphDirectionLeftIcon
