import { splitProps } from "solid-js"
function ReOrderDotsHorizontalIcon(props) {
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
			<path d="M15 7a1 1 0 102 0 1 1 0 00-2 0zM9 7a1 1 0 102 0 1 1 0 00-2 0zM4 8a1 1 0 110-2 1 1 0 010 2zm11 5a1 1 0 102 0 1 1 0 00-2 0zm-5 1a1 1 0 110-2 1 1 0 010 2zm-7-1a1 1 0 102 0 1 1 0 00-2 0z" />
		</svg>
	)
}
export default ReOrderDotsHorizontalIcon
