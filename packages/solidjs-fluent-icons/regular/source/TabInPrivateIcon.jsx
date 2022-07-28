import { splitProps } from "solid-js"
function TabInPrivateIcon(props) {
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
			<path d="M5.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3zM4 5.5v1.8L7.3 4H5.5C4.67 4 4 4.67 4 5.5zm0 3.2v2.6L11.3 4H8.7L4 8.7zM12.7 4L4 12.7v1.8c0 .23.05.45.15.65l11-11A1.5 1.5 0 0014.5 4h-1.8zm3.15.85l-11 11c.2.1.42.15.65.15h1.8L16 7.3V5.5c0-.23-.05-.45-.15-.65zM16 8.71L8.7 16h2.6l4.7-4.7V8.7zm0 4L12.7 16h1.8c.83 0 1.5-.67 1.5-1.5v-1.8z" />
		</svg>
	)
}
export default TabInPrivateIcon
