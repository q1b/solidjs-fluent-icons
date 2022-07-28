import { splitProps } from "solid-js"
function SubtitlesIcon(props) {
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
			<path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zm2 4.75c0 .28.22.5.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zm.5 1.5a.5.5 0 000 1h3a.5.5 0 000-1h-3zm8.5-1.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zM9.5 13a.5.5 0 000 1h6a.5.5 0 000-1h-6z" />
		</svg>
	)
}
export default SubtitlesIcon
