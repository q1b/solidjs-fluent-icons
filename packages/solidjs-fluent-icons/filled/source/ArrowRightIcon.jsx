import { splitProps } from "solid-js"
function ArrowRightIcon(props) {
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
			<path d="M11.27 3.2a.75.75 0 00-1.04 1.1l5.24 4.95H2.75a.75.75 0 000 1.5h12.73l-5.25 4.96a.75.75 0 101.04 1.09l6.41-6.07a1 1 0 000-1.46l-6.41-6.06z" />
		</svg>
	)
}
export default ArrowRightIcon
