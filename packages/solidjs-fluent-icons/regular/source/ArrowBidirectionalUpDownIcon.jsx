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
			<path d="M6.35 7.35a.5.5 0 11-.7-.7l3.5-3.5c.2-.2.5-.2.7 0l3.5 3.5a.5.5 0 01-.7.7L10 4.71v10.58l2.65-2.64a.5.5 0 01.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 01.7-.7L9 15.29V4.71L6.35 7.35z" />
		</svg>
	)
}
export default ArrowBidirectionalUpDownIcon
