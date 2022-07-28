import { splitProps } from "solid-js"
function RowTripleIcon(props) {
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
			<path d="M4.5 2C3.67 2 3 2.67 3 3.5v1C3 5.33 3.67 6 4.5 6h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11zm0 6C3.67 8 3 8.67 3 9.5v1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11zm0 6c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11z" />
		</svg>
	)
}
export default RowTripleIcon
