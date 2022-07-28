import { splitProps } from "solid-js"
function VideoSecurityIcon(props) {
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
			<path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm13 5.66V5.33l2.25-1.27a.5.5 0 01.75.44v7a.5.5 0 01-.75.44L15 10.66zm-8 3.09h3v.5A3.75 3.75 0 016.25 18H3.5a.5.5 0 01-.5-.5v-1.75c0-.28.22-.5.5-.5h2.75c.41 0 .75-.34.75-.75v-.75z" />
		</svg>
	)
}
export default VideoSecurityIcon
