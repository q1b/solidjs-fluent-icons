import { splitProps } from "solid-js"
function ImageShadowIcon(props) {
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
			<path d="M5 2a3 3 0 00-3 3v6c0 .65.2 1.25.55 1.74L6.8 8.49a1.7 1.7 0 012.4 0l4.25 4.25c.34-.5.55-1.1.55-1.74V5a3 3 0 00-3-3H5zm0 12c-.65 0-1.25-.2-1.74-.55L7.51 9.2a.7.7 0 01.98 0l4.25 4.25c-.5.34-1.1.55-1.74.55H5zm6-8a1 1 0 11-2 0 1 1 0 012 0zm-5 9a3 3 0 003 3h3a6 6 0 006-6V9a3 3 0 00-3-3v5a4 4 0 01-4 4H6z" />
		</svg>
	)
}
export default ImageShadowIcon
