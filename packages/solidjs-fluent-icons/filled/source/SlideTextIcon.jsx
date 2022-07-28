import { splitProps } from "solid-js"
function SlideTextIcon(props) {
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
			<path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5v-7zm3.5.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 10c0 .28.22.5.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zm.5 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" />
		</svg>
	)
}
export default SlideTextIcon
