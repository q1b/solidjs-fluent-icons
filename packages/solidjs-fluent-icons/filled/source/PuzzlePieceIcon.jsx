import { splitProps } from "solid-js"
function PuzzlePieceIcon(props) {
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
			<path d="M11 2a2 2 0 012 2v.06h3a1 1 0 011 1V8h-1a2 2 0 00-2 1.85V10a2 2 0 001.85 2H17v3.06a1 1 0 01-1 1h-3v.09a2 2 0 01-4-.1H6a1 1 0 01-1-1V12a2 2 0 110-4V5.06a1 1 0 011-1h3V4c0-1.1.9-2 2-2z" />
		</svg>
	)
}
export default PuzzlePieceIcon
