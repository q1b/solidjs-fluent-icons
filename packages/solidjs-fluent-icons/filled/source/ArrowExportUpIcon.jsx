import { splitProps } from "solid-js"
function ArrowExportUpIcon(props) {
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
			<path d="M10.53 1.72a.75.75 0 00-1.06 0l-4 4a.75.75 0 001.06 1.06l2.72-2.72v10.19a.75.75 0 001.5 0V4.06l2.72 2.72a.75.75 0 101.06-1.06l-4-4zM4.5 16.5a.75.75 0 000 1.5h11a.75.75 0 000-1.5h-11z" />
		</svg>
	)
}
export default ArrowExportUpIcon
