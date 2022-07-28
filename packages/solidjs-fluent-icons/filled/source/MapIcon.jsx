import { splitProps } from "solid-js"
function MapIcon(props) {
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
			<path d="M12 16.8l-4-2.23V3.24l4 2.8V16.8zm1-.02l4.76-2.85a.5.5 0 00.24-.43v-10a.5.5 0 00-.79-.41L13 6.04v10.74zM2.22 6.59L7 3.24v11.33l-4.26 2.37A.5.5 0 012 16.5V7a.5.5 0 01.21-.41z" />
		</svg>
	)
}
export default MapIcon
