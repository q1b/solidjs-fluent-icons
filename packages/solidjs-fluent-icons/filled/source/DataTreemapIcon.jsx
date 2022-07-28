import { splitProps } from "solid-js"
function DataTreemapIcon(props) {
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
			<path d="M7 3H6a3 3 0 00-3 3v8a3 3 0 003 3h1V3zm1 14h6a3 3 0 003-3v-1H8v4zm9-5V6a3 3 0 00-3-3H8v9h9z" />
		</svg>
	)
}
export default DataTreemapIcon
