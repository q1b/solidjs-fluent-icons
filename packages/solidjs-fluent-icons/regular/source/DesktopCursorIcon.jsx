import { splitProps } from "solid-js"
function DesktopCursorIcon(props) {
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
			<path d="M4 2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 000 1H11v-1H8v-2h3v-1H4a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v8.84l.87.87A2 2 0 0018 13V4a2 2 0 00-2-2H4zm8.86 8.15a.5.5 0 00-.86.35v8a.5.5 0 00.9.3l2-2.65 3.5.78a.5.5 0 00.45-.84l-6-5.94z" />
		</svg>
	)
}
export default DesktopCursorIcon
