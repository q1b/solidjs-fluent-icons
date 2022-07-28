import { splitProps } from "solid-js"
function Timer10Icon(props) {
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
			<path d="M7.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm7.66 1.93a.5.5 0 10-.71.7l1.41 1.42a.5.5 0 10.71-.7l-1.41-1.42zM16.43 10c-.98.02-1.86.44-2.48 1.1a1.5 1.5 0 00-1.92-1.02l-1.5.5A1.5 1.5 0 0011 13.5v4.34A7.03 7.03 0 012.5 11a7 7 0 0113.93-1zM9 10.5a.5.5 0 001 0v-4a.5.5 0 00-1 0v4zm5 3a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0v-3zm2.5-1.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 003 0v-3c0-.83-.67-1.5-1.5-1.5zm-3.5-.5a.5.5 0 00-.66-.47l-1.5.5a.5.5 0 10.32.94l.84-.28v6.31a.5.5 0 001 0v-7z" />
		</svg>
	)
}
export default Timer10Icon
