import { splitProps } from "solid-js"
function AlignRightIcon(props) {
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
			<path d="M16.5 2c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zM13 11a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1c0-1.1.9-2 2-2h5zm2-5a2 2 0 00-2-2H5a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V6z" />
		</svg>
	)
}
export default AlignRightIcon
