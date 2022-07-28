import { splitProps } from "solid-js"
function PillIcon(props) {
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
			<path d="M11.15 3.15a4.04 4.04 0 115.7 5.7l-8 8a4.04 4.04 0 11-5.7-5.7l8-8zm5 .7a3.04 3.04 0 00-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 000-4.3zm-7.3 10.3a.5.5 0 00-.7 0l-1.5 1.5a.91.91 0 01-1.3 0 .5.5 0 00-.85.35c0 .14.06.27.15.36.75.74 1.96.74 2.7 0l1.5-1.5a.5.5 0 000-.71z" />
		</svg>
	)
}
export default PillIcon
