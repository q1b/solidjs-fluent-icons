import { splitProps } from "solid-js"
function ColumnDoubleCompareIcon(props) {
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
			<path d="M7 3H3a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM3 4h4a1 1 0 011 1v1H2V5a1 1 0 011-1zm4 12H3a1 1 0 01-1-1V7h6v8a1 1 0 01-1 1zM17 3h-4a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zm-4 1h4a1 1 0 011 1v5h-6V5a1 1 0 011-1zm4 12h-4a1 1 0 01-1-1v-2h6v2a1 1 0 01-1 1z" />
		</svg>
	)
}
export default ColumnDoubleCompareIcon
