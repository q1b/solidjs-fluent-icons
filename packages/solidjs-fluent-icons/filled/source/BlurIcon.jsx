import { splitProps } from "solid-js"
function BlurIcon(props) {
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
			<path d="M10 2a8 8 0 105.3 14H10v-1h6.25a8 8 0 00.68-1H10v-1h7.42c.13-.32.24-.66.33-1H10v-1h7.94c.04-.33.06-.66.06-1h-8V9h7.94c-.04-.34-.1-.67-.2-1H10V7h7.42c-.14-.35-.3-.68-.49-1H10V5h6.25c-.3-.36-.61-.7-.96-1H10V3h3.88A7.96 7.96 0 0010 2z" />
		</svg>
	)
}
export default BlurIcon
