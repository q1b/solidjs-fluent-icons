import { splitProps } from "solid-js"
function ArrowSplitIcon(props) {
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
			<path d="M10 3c.28 0 .5.22.5.5V8H13a2 2 0 012 2v5.3l1.65-1.65a.5.5 0 01.7.7l-2.5 2.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 01.7-.7L14 15.29V10a1 1 0 00-1-1H7a1 1 0 00-1 1v5.3l1.65-1.65a.5.5 0 01.7.7l-2.5 2.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 01.7-.7L5 15.29V10c0-1.1.9-2 2-2h2.5V3.5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default ArrowSplitIcon
