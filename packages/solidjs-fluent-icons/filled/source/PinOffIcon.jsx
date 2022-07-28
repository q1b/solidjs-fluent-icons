import { splitProps } from "solid-js"
function PinOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L6.9 7.6 4.02 8.75a1 1 0 00-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 001.64-.34l1.15-2.88 4.75 4.75a.5.5 0 00.7-.7l-15-15zm14.01 7.73l-3.24 1.62L8.5 6.38l1.62-3.24a2 2 0 013.2-.52l4.06 4.05a2 2 0 01-.52 3.2z" />
		</svg>
	)
}
export default PinOffIcon
