import { splitProps } from "solid-js"
function ArrowUpRightIcon(props) {
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
			<path d="M8 3.75c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v7.5a.75.75 0 11-1.5 0V5.56L4.28 16.78a.75.75 0 01-1.06-1.06L14.44 4.5h-5.7A.75.75 0 018 3.75z" />
		</svg>
	)
}
export default ArrowUpRightIcon
