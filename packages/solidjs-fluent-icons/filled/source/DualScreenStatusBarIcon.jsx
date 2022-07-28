import { splitProps } from "solid-js"
function DualScreenStatusBarIcon(props) {
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
			<path d="M16 16h-5.5V4H16a2 2 0 012 2v8a2 2 0 01-2 2zM4 4h5.5v12H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8.5 2a.5.5 0 000 1H16a.5.5 0 000-1h-3.5z" />
		</svg>
	)
}
export default DualScreenStatusBarIcon
