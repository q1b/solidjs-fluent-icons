import { splitProps } from "solid-js"
function CalendarChatIcon(props) {
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5V6h14v-.5A2.5 2.5 0 0014.5 3h-9zM17 7H3v7.5A2.5 2.5 0 005.5 17h3.92l.07-.23A5.48 5.48 0 0114.5 9c.9 0 1.75.22 2.5.6V7zm-7 7.5c0 .8.2 1.54.56 2.18l-.54 1.8c-.1.3.2.6.51.5l1.79-.54A4.5 4.5 0 1010 14.5zm2.5-1.5h4a.5.5 0 010 1h-4a.5.5 0 110-1zm-.5 2.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default CalendarChatIcon
