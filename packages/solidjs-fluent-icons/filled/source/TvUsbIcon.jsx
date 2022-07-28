import { splitProps } from "solid-js"
function TvUsbIcon(props) {
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
			<path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v1.27A2 2 0 0017 7h-2a2 2 0 00-2 2v1.27A2 2 0 0012 12v2.18a2 2 0 00.18.82H4a2 2 0 01-2-2V6zm15 2a1 1 0 011 1v2a1 1 0 011 1v2.2a1 1 0 01-.2.6l-1.3 1.8V18a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1.4l-1.31-1.84a1 1 0 01-.19-.58V12a1 1 0 011-1V9a1 1 0 011-1h2zm0 3V9h-2v2h2zm-3.5 5.91l-.66-.91H5.5a.5.5 0 000 1h8v-.09zm-.31-2.15l-.34.24z" />
		</svg>
	)
}
export default TvUsbIcon
