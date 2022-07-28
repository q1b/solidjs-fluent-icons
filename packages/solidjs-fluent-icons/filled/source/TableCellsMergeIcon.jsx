import { splitProps } from "solid-js"
function TableCellsMergeIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3H3zm0 1v6h14V7H3zm4.35 1.85l-.64.65h6.58l-.64-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65H6.71l.64.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 11.7.7zM3 14h14a3 3 0 01-3 3H6a3 3 0 01-3-3z" />
		</svg>
	)
}
export default TableCellsMergeIcon
