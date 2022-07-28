import { splitProps } from "solid-js"
function GlanceDefaultIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 12 12"
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
			<path d="M6 9.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-2C6.67 5 6 5.67 6 6.5v3zm-5-4C1 6.33 1.67 7 2.5 7h1C4.33 7 5 6.33 5 5.5v-3C5 1.67 4.33 1 3.5 1h-1C1.67 1 1 1.67 1 2.5v3zM7.5 4a1.5 1.5 0 110-3h2a1.5 1.5 0 010 3h-2zM1 9.5c0 .83.67 1.5 1.5 1.5h1a1.5 1.5 0 000-3h-1C1.67 8 1 8.67 1 9.5z" />
		</svg>
	)
}
export default GlanceDefaultIcon
