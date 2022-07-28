import { splitProps } from "solid-js"
function TabDesktopMultipleIcon(props) {
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
			<path d="M2 4.5A2.5 2.5 0 014.5 2H6v2.5C6 5.33 6.67 6 7.5 6H15v6.5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 012 12.5v-8zm5 0V2h5.5A2.5 2.5 0 0115 4.5V5H7.5a.5.5 0 01-.5-.5zM7.5 18a2.5 2.5 0 01-2.45-2h7.45a3.5 3.5 0 003.5-3.5V5.05a2.5 2.5 0 012 2.45V14a4 4 0 01-4 4H7.5z" />
		</svg>
	)
}
export default TabDesktopMultipleIcon
