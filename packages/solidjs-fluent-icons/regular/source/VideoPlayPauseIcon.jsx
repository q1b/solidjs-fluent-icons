import { splitProps } from "solid-js"
function VideoPlayPauseIcon(props) {
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
			<path d="M10 6.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-7zm1.5-.5a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-1zm3.5.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-7zm1.5-.5a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-1zM3 6.5c0-.2.22-.32.39-.2l5.5 3.53c.15.1.14.32-.01.42l-5.5 3.46A.25.25 0 013 13.5v-7zm.93-1.05A1.25 1.25 0 002 6.5v7c0 .98 1.08 1.58 1.92 1.06l5.5-3.46c.77-.5.77-1.62 0-2.11l-5.5-3.54z" />
		</svg>
	)
}
export default VideoPlayPauseIcon
