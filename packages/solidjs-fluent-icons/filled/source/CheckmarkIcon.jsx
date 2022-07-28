import { splitProps } from "solid-js"
function CheckmarkIcon(props) {
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
			<path d="M7.03 13.9L3.56 10a.75.75 0 00-1.12 1l4 4.5c.29.32.79.34 1.09.03l10.5-10.5a.75.75 0 00-1.06-1.06l-9.94 9.94z" />
		</svg>
	)
}
export default CheckmarkIcon
