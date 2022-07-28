import { splitProps } from "solid-js"
function HardDriveIcon(props) {
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
			<path d="M6.49 4a2 2 0 00-1.84 1.21l-2 4.7c.38-.26.85-.41 1.35-.41h12c.56 0 1.08.18 1.5.5a57.37 57.37 0 00-2.14-4.91A1.96 1.96 0 0013.59 4H6.5zM2.5 12c0-.83.67-1.5 1.5-1.5h12c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H4A1.5 1.5 0 012.5 14v-2zm12.5.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
		</svg>
	)
}
export default HardDriveIcon
