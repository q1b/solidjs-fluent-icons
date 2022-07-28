import { splitProps } from "solid-js"
function ArrowMaximizeIcon(props) {
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
			<path d="M16 3a1 1 0 011 1v5.25a.75.75 0 01-1.5 0v-3.7L5.56 15.5h3.69a.75.75 0 010 1.5H4a1 1 0 01-1-1v-5.25a.75.75 0 011.5 0v3.69l9.94-9.94h-3.69a.75.75 0 010-1.5H16z" />
		</svg>
	)
}
export default ArrowMaximizeIcon
