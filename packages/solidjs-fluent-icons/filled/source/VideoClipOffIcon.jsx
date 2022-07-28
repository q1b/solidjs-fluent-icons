import { splitProps } from "solid-js"
function VideoClipOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l.73.74A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 00.7-.7l-15-15zm8.08 9.49l-2.15 1.43a.5.5 0 01-.78-.42V8.71l2.93 2.93zm1.85-1.22l-.15.1 5.1 5.1c.18-.34.27-.72.27-1.12v-9A2.5 2.5 0 0015.5 3H5.12l4.8 4.8 2.85 1.78a.5.5 0 010 .84z" />
		</svg>
	)
}
export default VideoClipOffIcon
