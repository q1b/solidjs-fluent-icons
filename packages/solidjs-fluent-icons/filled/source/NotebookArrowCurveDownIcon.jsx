import { splitProps } from "solid-js"
function NotebookArrowCurveDownIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 21 20"
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
			<path d="M2 5.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm6.4.9l-.9.9V5.74A2.75 2.75 0 004.75 3H4.5a.5.5 0 100 1h.25c.96 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 00-.7.71l1.75 1.76a.5.5 0 00.7 0L9.1 7.1a.5.5 0 10-.7-.7zm3.6-.9a5.5 5.5 0 01-8 4.9V16c0 1.1.89 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-3.26A5.48 5.48 0 0112 5.5zm5 .5h.5c.27 0 .5.22.5.5V8a.5.5 0 01-.5.5H17V6zm0 3.5h.5c.27 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H17V9.5zm0 3.5h.5c.27 0 .5.22.5.5V15a.5.5 0 01-.5.5H17V13z" />
		</svg>
	)
}
export default NotebookArrowCurveDownIcon
