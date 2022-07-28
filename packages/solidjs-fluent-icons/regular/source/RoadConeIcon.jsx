import { splitProps } from "solid-js"
function RoadConeIcon(props) {
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
			<path d="M9.38 2a1 1 0 00-.96.74L4.62 17H2.5a.5.5 0 000 1h15a.5.5 0 000-1h-2.12l-3.8-14.26a1 1 0 00-.96-.74H9.38zM5.65 17l.8-3h5.05a.5.5 0 000-1H6.72l.53-2h3.25a.5.5 0 000-1H7.52l1.86-7h1.24l3.73 14h-8.7z" />
		</svg>
	)
}
export default RoadConeIcon
