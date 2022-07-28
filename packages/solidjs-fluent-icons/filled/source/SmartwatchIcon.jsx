import { splitProps } from "solid-js"
function SmartwatchIcon(props) {
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
			<path d="M8 2a2 2 0 00-2 2v.17A3 3 0 017 4h6a3 3 0 011 .17V4a2 2 0 00-2-2H8zM7 5a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2v-2a1 1 0 001-1V9a1 1 0 00-1-1V7a2 2 0 00-2-2H7zm0 11a3 3 0 01-1-.17V16c0 1.1.9 2 2 2h4a2 2 0 002-2v-.17a3 3 0 01-1 .17H7z" />
		</svg>
	)
}
export default SmartwatchIcon
