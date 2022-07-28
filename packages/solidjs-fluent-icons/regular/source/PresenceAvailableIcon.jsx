import { splitProps } from "solid-js"
function PresenceAvailableIcon(props) {
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
			<path d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm12.2-3.2a1 1 0 010 1.4l-4.5 4.5a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.4L9 10.58l3.8-3.8a1 1 0 011.4 0z" />
		</svg>
	)
}
export default PresenceAvailableIcon
