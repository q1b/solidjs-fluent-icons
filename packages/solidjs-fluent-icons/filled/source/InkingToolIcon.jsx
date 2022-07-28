import { splitProps } from "solid-js"
function InkingToolIcon(props) {
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
			<path d="M8.52 15a6.2 6.2 0 00-.02.5c0 .58.07 1.16.27 1.62.21.47.6.88 1.23.88s1.02-.41 1.23-.88c.2-.46.27-1.04.27-1.62 0-.17 0-.34-.02-.5H8.52zM2.5 5.5v-3c0-.28.22-.5.5-.5h14c.28 0 .5.22.5.5v3c0 .83-.67 1.5-1.5 1.5H4a1.5 1.5 0 01-1.5-1.5zM4.75 8l2.72 5.45a1 1 0 00.9.55h3.26a1 1 0 00.9-.55L15.25 8H4.75z" />
		</svg>
	)
}
export default InkingToolIcon
