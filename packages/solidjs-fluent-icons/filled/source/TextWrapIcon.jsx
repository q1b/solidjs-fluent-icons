import { splitProps } from "solid-js"
function TextWrapIcon(props) {
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
			<path d="M2 4.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.25zm0 5c0-.41.34-.75.75-.75h13a3.25 3.25 0 010 6.5h-3.4l.23.27a.75.75 0 01-1.16.96l-1.25-1.5a.75.75 0 010-.96l1.25-1.5a.75.75 0 011.16.96l-.23.27h3.4a1.75 1.75 0 100-3.5h-13A.75.75 0 012 9.25zm0 5c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" />
		</svg>
	)
}
export default TextWrapIcon
