import { splitProps } from "solid-js"
function EmojiEditIcon(props) {
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
			<path d="M10 2a8 8 0 017.95 7.12 2.87 2.87 0 00-2.85.72l-3.38 3.39c-1.5.7-3.33.44-4.57-.8a.5.5 0 10-.7.7 5 5 0 003.9 1.47l-.08.07c-.4.41-.7.92-.84 1.49l-.37 1.5c-.03.09-.04.18-.05.28A8 8 0 0110 2zm2.5 5.5a1 1 0 100 2 1 1 0 000-2zm-5 0a1 1 0 100 2 1 1 0 000-2zm3.48 7.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default EmojiEditIcon
