import { splitProps } from "solid-js"
function SubGridIcon(props) {
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
			<path d="M6 10.5v2c0 .83.67 1.5 1.5 1.5h2v-3.5H6zm0-1v-2C6 6.67 6.67 6 7.5 6h2v3.5H6zM10.5 6v3.5H14v-2c0-.83-.67-1.5-1.5-1.5h-2zm3.5 4.5h-3.5V14h2c.83 0 1.5-.67 1.5-1.5v-2zM6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zm-2 7.5h2v-1H4V6c0-1.1.9-2 2-2h3.5v2h1V4H14a2 2 0 012 2v3.5h-2v1h2V14a2 2 0 01-2 2h-3.5v-2h-1v2H6a2 2 0 01-2-2v-3.5z" />
		</svg>
	)
}
export default SubGridIcon
