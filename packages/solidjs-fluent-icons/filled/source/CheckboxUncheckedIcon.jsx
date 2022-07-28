import { splitProps } from "solid-js"
function CheckboxUncheckedIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5H6z" />
		</svg>
	)
}
export default CheckboxUncheckedIcon
