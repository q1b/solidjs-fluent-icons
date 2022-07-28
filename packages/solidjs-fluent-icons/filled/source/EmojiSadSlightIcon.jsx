import { splitProps } from "solid-js"
function EmojiSadSlightIcon(props) {
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
			<path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm4-1a1 1 0 110 2 1 1 0 010-2zm.3 4.5h.8a.5.5 0 010 1h-.8c-1.07 0-2.13.32-3.02.92a.5.5 0 11-.56-.84A6.45 6.45 0 0112.8 12z" />
		</svg>
	)
}
export default EmojiSadSlightIcon
