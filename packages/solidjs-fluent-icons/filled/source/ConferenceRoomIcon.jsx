import { splitProps } from "solid-js"
function ConferenceRoomIcon(props) {
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
			<path d="M9.19 2.11a.5.5 0 01.41-.1l7 1.5c.23.05.4.25.4.5v12a.5.5 0 01-.4.48l-7 1.5a.5.5 0 01-.6-.49v-15c0-.15.07-.3.19-.39zm3.31 7.9a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM8 3H3.5a.5.5 0 00-.5.5V16.5c0 .27.22.5.5.5H8V3z" />
		</svg>
	)
}
export default ConferenceRoomIcon
