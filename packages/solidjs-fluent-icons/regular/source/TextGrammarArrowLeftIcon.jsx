import { splitProps } from "solid-js"
function TextGrammarArrowLeftIcon(props) {
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
			<path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zm7.24 3c.26.3.48.64.66 1h7.1a.5.5 0 000-1H9.74zM11 14.5c0 .17 0 .34-.02.5h6.52a.5.5 0 000-1h-6.52l.02.5zm-1 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35a.5.5 0 00-.7.7L6.29 14H3.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2A.5.5 0 008 14.5a.5.5 0 00-.14-.35l-2-2z" />
		</svg>
	)
}
export default TextGrammarArrowLeftIcon
