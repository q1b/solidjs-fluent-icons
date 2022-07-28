import { splitProps } from "solid-js"
function CircleMultipleSubtractCheckmarkIcon(props) {
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
			<path d="M12.92 6A7 7 0 006 12.92 6 6 0 1112.92 6zm-3.8 0H4.5a.5.5 0 000 1h3.2c.44-.38.92-.72 1.42-1zM19 13a6 6 0 11-12 0 6 6 0 0112 0zm-3.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-1.15-1.14a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default CircleMultipleSubtractCheckmarkIcon
