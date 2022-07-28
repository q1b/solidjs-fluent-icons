import { splitProps } from "solid-js"
function ArrowUndoIcon(props) {
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
			<path d="M5 2.5a.5.5 0 00-1 0v4.9c0 .33.27.6.6.6h4.9a.5.5 0 000-1H5.9l3.48-3.02a4 4 0 015.25 6.04l-8.17 7.1a.5.5 0 00.65.76l8.17-7.1a5 5 0 00-6.56-7.55L5 6.46V2.5z" />
		</svg>
	)
}
export default ArrowUndoIcon
