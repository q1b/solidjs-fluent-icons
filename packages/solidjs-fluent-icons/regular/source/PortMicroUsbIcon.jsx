import { splitProps } from "solid-js"
function PortMicroUsbIcon(props) {
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
			<path d="M6.43 8.3c.26-.2.58-.3.9-.3h5.34c.32 0 .64.1.9.3l1.33 1A1.5 1.5 0 0114 12H6a1.5 1.5 0 01-.9-2.7l1.33-1zm.9.7a.5.5 0 00-.3.1l-1.33 1a.5.5 0 00.3.9h8a.5.5 0 00.3-.9l-1.33-1a.5.5 0 00-.3-.1H7.33z" />
		</svg>
	)
}
export default PortMicroUsbIcon
