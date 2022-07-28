import { splitProps } from "solid-js"
function TextContinuousIcon(props) {
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
			<path d="M2 5.5c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 5.5zm0 9c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 14.5zm2.78-5.03l-1.5-1.5a.75.75 0 00-1.06 1.06l.97.97-.97.97a.75.75 0 101.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06zM7 8.5c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 8.5zm.75 2.25a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z" />
		</svg>
	)
}
export default TextContinuousIcon
