import { splitProps } from "solid-js"
function ReOrderDotsVerticalIcon(props) {
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
			<path d="M7 5a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2zm1 5a1 1 0 11-2 0 1 1 0 012 0zm5-11a1 1 0 100-2 1 1 0 000 2zm1 5a1 1 0 11-2 0 1 1 0 012 0zm-1 7a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default ReOrderDotsVerticalIcon
