import { splitProps } from "solid-js"
function ProhibitedIcon(props) {
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
			<path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0c0-1.52-.53-2.93-1.4-4.04L5.96 15.1A6.5 6.5 0 0016.5 10zM4.9 14.04l9.14-9.14a6.5 6.5 0 00-9.13 9.13z" />
		</svg>
	)
}
export default ProhibitedIcon
