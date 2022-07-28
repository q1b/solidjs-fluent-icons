import { splitProps } from "solid-js"
function HdIcon(props) {
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
			<path d="M12.42 12h-.92V8h.92c.87 0 1.58.7 1.58 1.58v.84c0 .87-.7 1.58-1.58 1.58zM6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zm-.5 4c.28 0 .5.22.5.5V10h2.5V7.5a.5.5 0 011 0v5a.5.5 0 01-1 0V11H6v1.5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5zM11 7h1.42A2.58 2.58 0 0115 9.58v.84A2.58 2.58 0 0112.42 13H11a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default HdIcon
