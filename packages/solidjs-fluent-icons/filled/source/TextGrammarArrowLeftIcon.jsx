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
			<path d="M2.75 5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zm0 3a.75.75 0 000 1.5h.46a5.48 5.48 0 014.58 0h9.46a.75.75 0 000-1.5H2.75zm14.5 7.5h-6.34a5.53 5.53 0 00.07-1.5h6.27a.75.75 0 010 1.5zm0-3h-6.62a5.5 5.5 0 00-.89-1.5h7.51a.75.75 0 010 1.5zm-7.25 2a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35a.5.5 0 00-.7.7L6.29 14H3.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2A.5.5 0 008 14.5a.5.5 0 00-.14-.35l-2-2z" />
		</svg>
	)
}
export default TextGrammarArrowLeftIcon
