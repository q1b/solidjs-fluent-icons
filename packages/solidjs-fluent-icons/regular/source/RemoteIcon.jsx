import { splitProps } from "solid-js"
function RemoteIcon(props) {
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
			<path d="M17.15 14.85a.5.5 0 00.7-.7L12.21 8.5l5.64-5.65a.5.5 0 00-.7-.7l-6 6a.5.5 0 000 .7l6 6zm-14.3-9.7a.5.5 0 10-.7.7l5.64 5.65-5.64 5.65a.5.5 0 00.7.7l6-6a.5.5 0 000-.7l-6-6z" />
		</svg>
	)
}
export default RemoteIcon
