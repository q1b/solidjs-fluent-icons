import { splitProps } from "solid-js"
function TextAlignJustifyLowIcon(props) {
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
			<path d="M9 4.5c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 019 4.5zm0 5c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 019 9.5zm-6.25 4.25a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
		</svg>
	)
}
export default TextAlignJustifyLowIcon
