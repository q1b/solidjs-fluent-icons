import { splitProps } from "solid-js"
function CaretUpIcon(props) {
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
			<path d="M5.8 13.9a1 1 0 01-.78-1.62l3.81-4.72a1.5 1.5 0 012.34 0l3.81 4.72a1 1 0 01-.78 1.63H5.8z" />
		</svg>
	)
}
export default CaretUpIcon
