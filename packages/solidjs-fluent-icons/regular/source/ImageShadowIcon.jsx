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
			<path d="M5 2a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3H5zM3 5c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-.28 1.02L9.2 8.49a1.7 1.7 0 00-2.4 0l-3.52 3.53A2 2 0 013 11V5zm5.5 4.2l3.52 3.52A2 2 0 0111 13H5a2 2 0 01-1.02-.28L7.51 9.2a.7.7 0 01.98 0zM11 6a1 1 0 11-2 0 1 1 0 012 0zm-5 9a3 3 0 003 3h3a6 6 0 006-6V9a3 3 0 00-3-3v5a4 4 0 01-4 4H6z" />
		</svg>
	)
}
export default ImageShadowIcon
