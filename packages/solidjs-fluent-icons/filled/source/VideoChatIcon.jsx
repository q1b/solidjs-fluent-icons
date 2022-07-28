import { splitProps } from "solid-js"
function VideoChatIcon(props) {
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
			<path d="M14 5.5A2.5 2.5 0 0011.5 3h-6A2.5 2.5 0 003 5.5v3.1a5.5 5.5 0 017.8 6.4h.7a2.5 2.5 0 002.5-2.5v-7zm1 1.43v4.15l2.76 2.35a.75.75 0 001.24-.57V5.2a.75.75 0 00-1.23-.57L15 6.93zM5.5 18a4.5 4.5 0 10-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56zM3 12.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 010-1h2a.5.5 0 010 1h-2z" />
		</svg>
	)
}
export default VideoChatIcon
