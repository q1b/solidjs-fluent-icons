import { splitProps } from "solid-js"
function TableInsertColumnIcon(props) {
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
			<path d="M4 3.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zm13 0a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM9 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H9zm-1 9V8h4v4H8zm4-7v2H8V5a1 1 0 011-1h2a1 1 0 011 1zm-4 8h4v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2z" />
		</svg>
	)
}
export default TableInsertColumnIcon
