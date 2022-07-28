import { splitProps } from "solid-js"
function ArrowSortDownIcon(props) {
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
			<path d="M9.75 17c.23 0 .45-.1.59-.28l2.94-2.94a.75.75 0 00-1.06-1.06l-1.72 1.71V3.75a.75.75 0 00-1.5 0v10.7L7.28 12.7a.75.75 0 10-1.06 1.06l3 3.01c.15.15.34.22.53.22z" />
		</svg>
	)
}
export default ArrowSortDownIcon
