import { splitProps } from "solid-js"
function LinkToolboxIcon(props) {
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
			<path d="M8.75 4.75A.75.75 0 008 4H5.8a4 4 0 00.2 8h2.1a.75.75 0 00-.1-1.5H5.84a2.5 2.5 0 01.16-5h2.1a.75.75 0 00.65-.75zM18 8a4 4 0 00-4-4h-2.1a.75.75 0 00.1 1.5h2.16a2.5 2.5 0 012.08 3.61c.5.16.93.46 1.24.86.33-.58.52-1.25.52-1.97zM6.25 7.25h7.5a.75.75 0 01.1 1.5h-7.6a.75.75 0 01-.1-1.5h.1zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" />
		</svg>
	)
}
export default LinkToolboxIcon
