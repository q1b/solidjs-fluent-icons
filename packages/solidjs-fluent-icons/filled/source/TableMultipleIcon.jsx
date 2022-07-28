import { splitProps } from "solid-js"
function TableMultipleIcon(props) {
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
			<path d="M17 13.5a3.5 3.5 0 01-3.5 3.5H5.67c.77.63 1.76 1 2.83 1h5a4.5 4.5 0 004.5-4.5v-5c0-1.07-.37-2.06-1-2.83v7.83zM4.5 16H6v-4H2v1.5A2.5 2.5 0 004.5 16zM6 7v4H2V7h4zm5 4H7V7h4v4zm-4 1h4v4H7v-4zm5-5v4h4V7h-4zm0 5h4v1.5a2.5 2.5 0 01-2.5 2.5H12v-4zM2 6h4V2H4.5A2.5 2.5 0 002 4.5V6zm5 0V2h4v4H7zm5 0V2h1.5A2.5 2.5 0 0116 4.5V6h-4z" />
		</svg>
	)
}
export default TableMultipleIcon
