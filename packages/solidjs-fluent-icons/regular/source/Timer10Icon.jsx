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
			<path d="M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 11-.7.71l-1.42-1.41a.5.5 0 010-.71zM9 6.5a.5.5 0 011 0v4a.5.5 0 01-1 0v-4zM9.5 18c.51 0 1.02-.06 1.5-.16V16.8a6.01 6.01 0 114.44-6.65c.31-.1.65-.15.99-.16a7 7 0 10-6.93 8zm4.5-4.5a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0v-3zm2.5-1.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 003 0v-3c0-.83-.67-1.5-1.5-1.5zm-3.5-.5a.5.5 0 00-.66-.47l-1.5.5a.5.5 0 10.32.94l.84-.28v6.31a.5.5 0 001 0v-7z" />
		</svg>
	)
}
export default Timer10Icon
