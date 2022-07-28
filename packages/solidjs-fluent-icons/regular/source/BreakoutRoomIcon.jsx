import { splitProps } from "solid-js"
function BreakoutRoomIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.35c.32-.29.6-.62.81-1H14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2.54c-.38.21-.71.49-1 .81V6zm3 3a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3H6zm-2 3c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
		</svg>
	)
}
export default BreakoutRoomIcon
