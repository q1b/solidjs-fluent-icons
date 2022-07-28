import { splitProps } from "solid-js"
function PaintBrushIcon(props) {
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
			<path d="M10 4.5V2H5.5a.5.5 0 00-.5.5V9h10V2.5a.5.5 0 00-.5-.5H13v3.5a.5.5 0 01-1 0V2h-1v2.5a.5.5 0 01-1 0zm5 5.5H5v1c0 1.1.9 2 2 2h1.5v3.5a1.5 1.5 0 103 0V13H13a2 2 0 002-2v-1z" />
		</svg>
	)
}
export default PaintBrushIcon
