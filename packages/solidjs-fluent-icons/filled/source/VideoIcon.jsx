import { splitProps } from "solid-js"
function VideoIcon(props) {
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
			<path d="M13 6.5A2.5 2.5 0 0010.5 4h-6A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h6a2.5 2.5 0 002.5-2.5v-7zm1 1.43v4.15l2.76 2.35a.75.75 0 001.24-.57V6.2a.75.75 0 00-1.23-.57L14 7.93z" />
		</svg>
	)
}
export default VideoIcon
