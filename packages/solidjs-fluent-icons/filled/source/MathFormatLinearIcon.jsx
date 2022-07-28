import { splitProps } from "solid-js"
function MathFormatLinearIcon(props) {
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
			<path d="M9.01 3.18c.28-.24.7-.24.98 0l1.75 1.5a.75.75 0 11-.98 1.14L9.5 4.74 8.24 5.82a.75.75 0 01-.98-1.14l1.75-1.5zm2.3 5.7c.36-.4.54-.38.56-.38.05 0 .15.05.26.2l1.32 2.05-3.21 2.98a.75.75 0 101.02 1.1l3-2.8 1.36 2.1v.02a1.92 1.92 0 003.27.01.75.75 0 10-1.28-.77.42.42 0 01-.51.14.59.59 0 01-.22-.21L15.38 11l2.88-2.67a.75.75 0 00-1.02-1.1L14.56 9.7l-1.18-1.84A1.93 1.93 0 0012.02 7c-.67-.07-1.3.27-1.84.9a.75.75 0 101.14.98zM7.68 7.86a2.11 2.11 0 00-1.52-.83c-.6-.07-1.26.03-1.92.3-1.33.56-2.6 1.86-3.12 4.08-.23.97-.1 1.84.35 2.54A3.32 3.32 0 003.3 15.3a4.5 4.5 0 004.47-1.09.75.75 0 10-1.07-1.04 3 3 0 01-2.95.7c-.47-.15-.82-.4-1.02-.73a1.5 1.5 0 01-.23-.7c2.13.26 3.63-.3 4.54-1.22.5-.52.8-1.12.91-1.7.1-.57.04-1.2-.28-1.67zm-1.7 2.31c-.49.5-1.46.99-3.17.8a3.77 3.77 0 012-2.26c.45-.18.86-.23 1.17-.19.32.04.44.16.46.18.04.06.1.25.05.55-.06.29-.21.62-.5.92z" />
		</svg>
	)
}
export default MathFormatLinearIcon
