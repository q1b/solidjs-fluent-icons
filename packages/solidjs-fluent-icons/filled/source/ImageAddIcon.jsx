import { splitProps } from "solid-js"
function ImageAddIcon(props) {
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
			<path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H6V3.5zM5.5 11a5.5 5.5 0 004.9-8H14a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-3.6c.75.38 1.6.6 2.5.6zm7-3a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.7 0l-5.38 5.3z" />
		</svg>
	)
}
export default ImageAddIcon
