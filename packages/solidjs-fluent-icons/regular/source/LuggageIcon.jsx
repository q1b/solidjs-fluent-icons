import { splitProps } from "solid-js"
function LuggageIcon(props) {
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
			<path d="M6.5 2a.5.5 0 000 1H7v1h-.5A2.5 2.5 0 004 6.5v8a2.5 2.5 0 002 2.45v.55a.5.5 0 001 0V17h6v.5a.5.5 0 001 0v-.55a2.5 2.5 0 002-2.45v-8A2.5 2.5 0 0013.5 4H13V3h.5a.5.5 0 000-1h-7zM12 3v1H8V3h4zM6.5 5h7c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 14.5v-8C5 5.67 5.67 5 6.5 5zm0 3.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default LuggageIcon
