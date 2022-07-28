import { splitProps } from "solid-js"
function SpeakerBluetoothIcon(props) {
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
			<path d="M10.32 2.27a1 1 0 011.68.74v13.98a1 1 0 01-1.68.74l-3.87-3.6A.5.5 0 006.1 14H3.5A1.5 1.5 0 012 12.5v-5C2 6.67 2.67 6 3.5 6h2.6a.5.5 0 00.35-.13l3.87-3.6zm5.53 2.88a.5.5 0 00-.85.35v3.46l-1.19-.95a.5.5 0 10-.62.78L14.7 10l-1.51 1.21a.5.5 0 10.62.78l1.19-.95v3.46a.5.5 0 00.85.35l2.5-2.5a.5.5 0 00-.04-.74L16.3 10l2.01-1.61a.5.5 0 00.04-.74l-2.5-2.5zm1.4 6.9L16 13.28v-2.25l1.25 1zM16 6.7l1.25 1.25-1.25 1V6.71z" />
		</svg>
	)
}
export default SpeakerBluetoothIcon
