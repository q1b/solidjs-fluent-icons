import { splitProps } from "solid-js"
function WarningIcon(props) {
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
			<path d="M8.68 2.79a1.5 1.5 0 012.64 0l6.5 12A1.5 1.5 0 0116.5 17h-13a1.5 1.5 0 01-1.32-2.21l6.5-12zM10.5 7.5a.5.5 0 00-1 0v4a.5.5 0 001 0v-4zm.25 6.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
		</svg>
	)
}
export default WarningIcon
