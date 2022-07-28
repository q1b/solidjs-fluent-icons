import { splitProps } from "solid-js"
function EmojiIcon(props) {
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
			<path d="M10 2a8 8 0 110 16 8 8 0 010-16zM7.15 12.43a.5.5 0 10-.7.7 5.01 5.01 0 006.9.2l.2-.2.06-.07a.5.5 0 00-.7-.7l-.06.07-.18.17a4.01 4.01 0 01-5.52-.17zM12.5 7.5a1 1 0 100 2 1 1 0 000-2zm-5 0a1 1 0 100 2 1 1 0 000-2z" />
		</svg>
	)
}
export default EmojiIcon
