import { splitProps } from "solid-js"
function SquareShadowIcon(props) {
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
			<path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14H6v1.5A2.5 2.5 0 008.5 18h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 6H14V4.5A2.5 2.5 0 0011.5 2h-7zm-1 2.5a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7z" />
		</svg>
	)
}
export default SquareShadowIcon
