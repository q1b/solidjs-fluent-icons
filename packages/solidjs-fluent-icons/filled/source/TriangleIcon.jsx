import { splitProps } from "solid-js"
function TriangleIcon(props) {
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
			<path d="M1.18 15.8c-.53 1 .2 2.2 1.32 2.2h15a1.5 1.5 0 001.32-2.22l-7.6-14a1.5 1.5 0 00-2.65.02l-7.4 14z" />
		</svg>
	)
}
export default TriangleIcon
