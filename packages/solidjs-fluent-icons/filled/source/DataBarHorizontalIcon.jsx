import { splitProps } from "solid-js"
function DataBarHorizontalIcon(props) {
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
			<path d="M4 2a2 2 0 100 4h5a2 2 0 100-4H4zm0 6a2 2 0 100 4h8a2 2 0 100-4H4zm0 6a2 2 0 100 4h12a2 2 0 100-4H4z" />
		</svg>
	)
}
export default DataBarHorizontalIcon
