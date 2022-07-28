import { splitProps } from "solid-js"
function ChartMultipleIcon(props) {
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
			<path d="M15 11c0-.37.1-.7.27-1H10.5A1.5 1.5 0 019 8.5V2.02a7.5 7.5 0 000 14.96V15a2 2 0 013-1.73V13a2 2 0 013-1.73V11zm-5-8.98V8.5c0 .28.22.5.5.5h6.48A7.5 7.5 0 0010 2.02zM16 11a1 1 0 112 0v7a1 1 0 11-2 0v-7zm-6 4a1 1 0 112 0v3a1 1 0 11-2 0v-3zm3-2a1 1 0 112 0v5a1 1 0 11-2 0v-5z" />
		</svg>
	)
}
export default ChartMultipleIcon
