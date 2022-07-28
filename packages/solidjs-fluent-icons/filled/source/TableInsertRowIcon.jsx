import { splitProps } from "solid-js"
function TableInsertRowIcon(props) {
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
			<path d="M3.5 16a.5.5 0 000 1h13a.5.5 0 000-1h-13zm0-13a.5.5 0 000 1h13a.5.5 0 000-1h-13zM3 11c0 1.1.9 2 2 2h2V7H5a2 2 0 00-2 2v2zm9 2H8V7h4v6zm1 0V7h2a2 2 0 012 2v2a2 2 0 01-2 2h-2z" />
		</svg>
	)
}
export default TableInsertRowIcon
