import { splitProps } from "solid-js"
function VideoClipMultipleIcon(props) {
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
			<path d="M4.5 3A2.5 2.5 0 002 5.5v7A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0013.5 3h-9zM7 6.76c0-.6.67-.96 1.17-.62l3.61 2.45c.3.2.3.63 0 .82l-3.6 2.46A.75.75 0 017 11.25v-4.5zM6.5 17a2.5 2.5 0 01-2-1H14a3 3 0 003-3V5.5c.6.46 1 1.18 1 2V13a4 4 0 01-4 4H6.5z" />
		</svg>
	)
}
export default VideoClipMultipleIcon
