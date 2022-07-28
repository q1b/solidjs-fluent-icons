import { splitProps } from "solid-js"
function ChevronCircleDownIcon(props) {
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
			<path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-8a8 8 0 100 16 8 8 0 000-16zM6.85 8.15a.5.5 0 10-.7.7l3.5 3.5a.5.5 0 00.7 0l3.5-3.5a.5.5 0 00-.7-.7L10 11.29 6.85 8.15z" />
		</svg>
	)
}
export default ChevronCircleDownIcon
