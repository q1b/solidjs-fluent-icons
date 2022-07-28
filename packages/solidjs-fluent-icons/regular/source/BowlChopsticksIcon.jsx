import { splitProps } from "solid-js"
function BowlChopsticksIcon(props) {
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
			<path d="M4.93 2.24a.5.5 0 00-.86.52L7.91 9H2.5a.5.5 0 00-.5.5v.5a8 8 0 1016 0v-.5a.5.5 0 00-.5-.5h-5.41L7.93 2.24a.5.5 0 00-.86.52L10.91 9H9.1L4.93 2.24zM3.29 12A7 7 0 013 10h14a7 7 0 01-.29 2H3.29zm.38 1h12.66a7 7 0 01-12.66 0z" />
		</svg>
	)
}
export default BowlChopsticksIcon
