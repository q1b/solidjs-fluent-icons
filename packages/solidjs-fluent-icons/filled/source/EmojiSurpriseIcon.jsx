import { splitProps } from "solid-js"
function EmojiSurpriseIcon(props) {
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
			<path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5.5-.5a1 1 0 100-2 1 1 0 000 2zm4.25 3a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0zm.75-3a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default EmojiSurpriseIcon
