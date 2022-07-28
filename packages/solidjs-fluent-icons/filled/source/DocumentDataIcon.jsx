import { splitProps } from "solid-js"
function DocumentDataIcon(props) {
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
			<path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zM10 9c.28 0 .5.22.5.5v6a.5.5 0 01-1 0v-6c0-.28.22-.5.5-.5zm-2.5 4c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5zm5-2c.28 0 .5.22.5.5v4a.5.5 0 01-1 0v-4c0-.28.22-.5.5-.5zM11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DocumentDataIcon
