import { splitProps } from "solid-js"
function TextAlignDistributedVerticalIcon(props) {
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
			<path d="M3.03 14.72a.75.75 0 00-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72V2.75a.75.75 0 00-1.5 0v12.69l-.72-.72zM10 18a.75.75 0 01-.75-.75V2.75a.75.75 0 011.5 0v14.5c0 .41-.34.75-.75.75zm8.03-12.72c-.3.3-.77.3-1.06 0l-.72-.72v12.69a.75.75 0 01-1.5 0V4.56l-.72.72a.75.75 0 11-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06z" />
		</svg>
	)
}
export default TextAlignDistributedVerticalIcon
