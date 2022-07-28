import { splitProps } from "solid-js"
function CaretRightIcon(props) {
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
			<path d="M8.63 14.98A1 1 0 017 14.2V5.8a1 1 0 011.63-.78l4.72 3.81c.74.6.74 1.74 0 2.34l-4.72 3.81zM8 5.8v8.4l4.72-3.81a.5.5 0 000-.78L8 5.8z" />
		</svg>
	)
}
export default CaretRightIcon
