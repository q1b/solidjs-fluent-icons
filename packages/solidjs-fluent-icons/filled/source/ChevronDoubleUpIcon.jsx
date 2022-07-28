import { splitProps } from "solid-js"
function ChevronDoubleUpIcon(props) {
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
			<path d="M4.2 15.27a.75.75 0 01.03-1.06l5.25-5a.75.75 0 011.04 0l5.25 5a.75.75 0 01-1.04 1.08L10 10.8l-4.73 4.5a.75.75 0 01-1.06-.02zm0-5a.75.75 0 01.03-1.06l5.25-5a.75.75 0 011.04 0l5.25 5a.75.75 0 01-1.04 1.08L10 5.8l-4.73 4.5a.75.75 0 01-1.06-.02z" />
		</svg>
	)
}
export default ChevronDoubleUpIcon
