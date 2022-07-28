import { splitProps } from "solid-js"
function ArrowBidirectionalUpDownIcon(props) {
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
			<path d="M6.78 7.78a.75.75 0 01-1.06-1.06l3.5-3.5c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 01-1.06 1.06L10.5 5.56v8.88l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5c-.3.3-.77.3-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06L9 14.44V5.56L6.78 7.78z" />
		</svg>
	)
}
export default ArrowBidirectionalUpDownIcon
