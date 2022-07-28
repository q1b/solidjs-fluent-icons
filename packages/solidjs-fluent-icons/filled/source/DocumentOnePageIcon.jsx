import { splitProps } from "solid-js"
function DocumentOnePageIcon(props) {
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
			<path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm7.09 5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1zm0 3.5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1zm0 3.5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1z" />
		</svg>
	)
}
export default DocumentOnePageIcon
