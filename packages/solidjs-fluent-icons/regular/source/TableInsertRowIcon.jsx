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
			<path d="M3.5 16a.5.5 0 000 1h13a.5.5 0 000-1h-13zm0-13a.5.5 0 000 1h13a.5.5 0 000-1h-13zM3 11c0 1.1.9 2 2 2h10a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm9 1H8V8h4v4zM5 8h2v4H5a1 1 0 01-1-1V9a1 1 0 011-1zm8 4V8h2a1 1 0 011 1v2a1 1 0 01-1 1h-2z" />
		</svg>
	)
}
export default TableInsertRowIcon
