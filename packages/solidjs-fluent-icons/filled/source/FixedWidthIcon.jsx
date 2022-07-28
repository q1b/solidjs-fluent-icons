import { splitProps } from "solid-js"
function FixedWidthIcon(props) {
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
			<path d="M3.5 3c.28 0 .5.22.5.5V5h5.5V3.5a.5.5 0 011 0V5H16V3.5a.5.5 0 011 0v4a.5.5 0 01-1 0V6h-5.5v1.5a.5.5 0 01-1 0V6H4v1.5a.5.5 0 01-1 0v-4c0-.28.22-.5.5-.5zm6 6H5a2 2 0 00-2 2v4c0 1.1.9 2 2 2h4.5V9zm1 8H15a2 2 0 002-2v-4a2 2 0 00-2-2h-4.5v8z" />
		</svg>
	)
}
export default FixedWidthIcon
