import { splitProps } from "solid-js"
function CubeQuickIcon(props) {
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
			<path d="M12.81 4.67a1.5 1.5 0 011.38 0l3 1.54c.5.25.81.77.81 1.33v3.92a1.5 1.5 0 01-.81 1.33l-3 1.54a1.5 1.5 0 01-1.38 0l-3-1.54A1.5 1.5 0 019 11.46V7.54c0-.56.31-1.08.81-1.33l3-1.54zm-1.76 3.1a.5.5 0 00.23.68L13 9.3v2.19a.5.5 0 101 0V9.3l1.72-.85a.5.5 0 10-.44-.9l-1.78.9-1.78-.9a.5.5 0 00-.67.23zM3.5 6a.5.5 0 000 1h4a.5.5 0 000-1h-4zm-1 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm1 3a.5.5 0 000 1h4a.5.5 0 000-1h-4z" />
		</svg>
	)
}
export default CubeQuickIcon
