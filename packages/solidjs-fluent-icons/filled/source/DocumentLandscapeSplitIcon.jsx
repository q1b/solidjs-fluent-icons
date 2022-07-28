import { splitProps } from "solid-js"
function DocumentLandscapeSplitIcon(props) {
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
			<path d="M12 8.5V4h-2v12h6a2 2 0 002-2v-4h-4.5A1.5 1.5 0 0112 8.5zM9 16H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5v12zm4-7.5V4.06c.24.07.47.2.65.38l3.91 3.91c.18.18.31.4.38.65H13.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DocumentLandscapeSplitIcon
