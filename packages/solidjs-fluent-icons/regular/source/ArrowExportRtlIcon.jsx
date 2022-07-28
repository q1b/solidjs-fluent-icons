import { splitProps } from "solid-js"
function ArrowExportRtlIcon(props) {
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
			<path d="M17.5 4a.5.5 0 00-.5.5v11a.5.5 0 001 0v-11a.5.5 0 00-.5-.5zM15 10a.5.5 0 00-.5-.5H3.7l3.15-3.15a.5.5 0 00-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L3.71 10.5H14.5a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default ArrowExportRtlIcon
