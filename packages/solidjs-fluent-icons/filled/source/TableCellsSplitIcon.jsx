import { splitProps } from "solid-js"
function TableCellsSplitIcon(props) {
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
			<path d="M10 6h7v-.5A2.5 2.5 0 0014.5 3H10v3zm7 7V7H3v6h14zm-7-5v4H9V8h1zm0 9h4.5a2.5 2.5 0 002.5-2.5V14h-7v3zm-1-3H3v.5A2.5 2.5 0 005.5 17H9v-3zm0-8V3H5.5A2.5 2.5 0 003 5.5V6h6z" />
		</svg>
	)
}
export default TableCellsSplitIcon
