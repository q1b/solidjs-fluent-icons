import { splitProps } from "solid-js"
function MarkdownIcon(props) {
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
			<path d="M2.5 4.05c.29-.11.62-.03.82.21L7 8.6l3.68-4.33a.75.75 0 011.32.49v9.5a.75.75 0 01-1.5 0V6.79l-2.93 3.45a.75.75 0 01-1.14 0L3.5 6.79v7.46a.75.75 0 01-1.5 0v-9.5c0-.31.2-.6.5-.7zm10.72 7.67c.3-.3.77-.3 1.06 0l.72.72V4.75a.75.75 0 011.5 0v7.69l.72-.72a.75.75 0 111.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 010-1.06z" />
		</svg>
	)
}
export default MarkdownIcon
