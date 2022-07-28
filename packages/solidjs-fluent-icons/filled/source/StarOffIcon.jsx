import { splitProps } from "solid-js"
function StarOffIcon(props) {
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
			<path d="M2.86 2.15a.5.5 0 10-.71.7l4.1 4.1-3.4.49a1 1 0 00-.55 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05L10 15.51l3.86 2.03a1 1 0 001.45-1.05l-.1-.57 1.94 1.93a.5.5 0 00.7-.7l-15-15zm11.72 10.04l.05.32-6.87-6.88L9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05z" />
		</svg>
	)
}
export default StarOffIcon
