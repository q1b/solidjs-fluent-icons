import { splitProps } from "solid-js"
function TabDesktopMultipleBottomIcon(props) {
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
			<path d="M5.05 4h7.45A3.5 3.5 0 0116 7.5v7.45a2.5 2.5 0 002-2.45V6a4 4 0 00-4-4H7.5a2.5 2.5 0 00-2.45 2zM2 7.5A2.5 2.5 0 014.5 5h8A2.5 2.5 0 0115 7.5v8a2.5 2.5 0 01-2.5 2.5H11v-2.5c0-.83-.67-1.5-1.5-1.5H2V7.5zm8 8V18H4.5A2.5 2.5 0 012 15.5V15h7.5c.28 0 .5.22.5.5z" />
		</svg>
	)
}
export default TabDesktopMultipleBottomIcon
