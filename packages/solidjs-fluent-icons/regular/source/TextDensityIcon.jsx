import { splitProps } from "solid-js"
function TextDensityIcon(props) {
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
			<path d="M10.5 2c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zM9 5H2.5a.5.5 0 000 1H9V5zm0 3H2.5a.5.5 0 000 1H9V8zm0 3H2.5a.5.5 0 000 1H9v-1zm0 3H2.5a.5.5 0 000 1H9v-1zm7.5 0H12v-1h4.5a.5.5 0 000-1H12v-1h4.5a1.5 1.5 0 010 3zm0-5H12V8h4.5a.5.5 0 000-1H12V6h4.5a1.5 1.5 0 010 3z" />
		</svg>
	)
}
export default TextDensityIcon
