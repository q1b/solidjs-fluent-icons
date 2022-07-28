import { splitProps } from "solid-js"
function CloudIcon(props) {
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
			<path d="M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 11.62 3.33 3.33 0 0114.72 15H5.28A3.33 3.33 0 012 11.62a3.33 3.33 0 013.28-3.37h.07C5.6 5.9 7.18 4 10 4z" />
		</svg>
	)
}
export default CloudIcon
