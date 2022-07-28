import { splitProps } from "solid-js"
function TextAlignDistributedEvenlyIcon(props) {
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
			<path d="M2 3.5c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.5zm0 5c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 8.5zm2.56 6.75h10.88l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H4.56l.72-.72a.75.75 0 10-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 001.06-1.06l-.72-.72z" />
		</svg>
	)
}
export default TextAlignDistributedEvenlyIcon
