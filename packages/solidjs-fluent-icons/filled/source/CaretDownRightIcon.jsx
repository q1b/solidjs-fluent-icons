import { splitProps } from "solid-js"
function CaretDownRightIcon(props) {
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
			<path d="M15 5.96a1 1 0 00-1.7-.71l-8.05 8.04a1 1 0 00.7 1.71h7.55c.83 0 1.5-.67 1.5-1.5V5.96z" />
		</svg>
	)
}
export default CaretDownRightIcon
