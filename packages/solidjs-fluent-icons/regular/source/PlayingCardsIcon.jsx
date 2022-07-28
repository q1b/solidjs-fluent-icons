import { splitProps } from "solid-js"
function PlayingCardsIcon(props) {
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
			<path d="M5.07 13a2 2 0 001.41 2.46l5.46 1.47a2 2 0 002.45-1.41L16.93 6a2 2 0 00-1.41-2.46l-5.46-1.47A2 2 0 007.6 3.5L5.07 13zm1.67 1.5a1 1 0 01-.7-1.23l2.53-9.52a1 1 0 011.23-.71l5.46 1.47a1 1 0 01.7 1.23l-2.53 9.52a1 1 0 01-1.23.7L6.74 14.5zM4 10.47L2.67 5.51a2 2 0 011.41-2.45l.08-.02A3 3 0 004 4v.19a1 1 0 00-.36 1.06L4 6.6v3.86zm1-1.09V4c0-1.1.9-2 2-2h.1a2.5 2.5 0 00-.33.74l-.08.31A1 1 0 006 4v1.64L5 9.38zM13 6a1 1 0 11-2 0 1 1 0 012 0zm-3 8a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default PlayingCardsIcon
