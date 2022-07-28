import { splitProps } from "solid-js"
function CellularData1Icon(props) {
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
			<path d="M16.5 4a.5.5 0 01.5.41V15.5a.5.5 0 01-.99.09V4.5c0-.28.22-.5.5-.5zm-9 6a.5.5 0 01.5.4v5.1a.5.5 0 01-.99.09v-5.1c0-.27.22-.5.5-.5zm-3 2a.5.5 0 01.5.4v3.1a.5.5 0 01-1 .09v-3.1c0-.27.22-.5.5-.5zm6-4a.5.5 0 01.5.4v7.1a.5.5 0 01-1 .09v-7.1c0-.27.22-.5.5-.5zm3-2a.5.5 0 01.5.41v9.09a.5.5 0 01-1 .09V6.5c0-.27.22-.5.5-.5z" />
		</svg>
	)
}
export default CellularData1Icon
