import { splitProps } from "solid-js"
function SpeakerUsbIcon(props) {
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
			<path d="M10.32 2.27a1 1 0 011.68.74v13.98a1 1 0 01-1.68.74l-3.88-3.6A.5.5 0 006.1 14H3.5A1.5 1.5 0 012 12.5v-5C2 6.67 2.67 6 3.5 6h2.6a.5.5 0 00.34-.13l3.88-3.6zm.68.74L7.12 6.6c-.27.26-.64.4-1.02.4H3.5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h2.6c.38 0 .75.14 1.02.4L11 17V3zM14 8V6a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 011 1v2.2a1 1 0 01-.2.6l-1.3 1.8V15a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1.4l-1.31-1.84a1 1 0 01-.19-.58V9a1 1 0 011-1zm1 0h2V6h-2v2z" />
		</svg>
	)
}
export default SpeakerUsbIcon
