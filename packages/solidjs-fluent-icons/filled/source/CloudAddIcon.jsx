import { splitProps } from "solid-js"
function CloudAddIcon(props) {
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
			<path d="M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 013.27 3.66A5.74 5.74 0 007.77 13H5.28A3.33 3.33 0 012 9.62a3.33 3.33 0 013.28-3.37h.07C5.6 3.9 7.18 2 10 2zm3.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V13h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V14h-1.5a.5.5 0 010-1H13v-1.5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default CloudAddIcon
