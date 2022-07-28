import { splitProps } from "solid-js"
function PersonHeartIcon(props) {
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
			<path d="M9 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.95 0 1.88-.1 2.72-.31l-1.83-2a3.4 3.4 0 01.1-4.69H4zm10.5 1l-.63-.49a2.4 2.4 0 00-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 00-3.24-3.5l-.63.5z" />
		</svg>
	)
}
export default PersonHeartIcon
