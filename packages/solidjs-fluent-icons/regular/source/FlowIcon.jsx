import { splitProps } from "solid-js"
function FlowIcon(props) {
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
			<path d="M15 5a2 2 0 100 4 2 2 0 000-4zm-2.96 1.5a3 3 0 110 1 1.5 1.5 0 00-1.33 1.25l-.44 2.66a2.5 2.5 0 01-2.31 2.09 3 3 0 110-1 1.5 1.5 0 001.33-1.25l.44-2.66a2.5 2.5 0 012.31-2.09zM5 11a2 2 0 100 4 2 2 0 000-4z" />
		</svg>
	)
}
export default FlowIcon
