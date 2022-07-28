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
			<path d="M4.24 2.07a.5.5 0 01.69.17L9.09 9h1.82L7.07 2.76a.5.5 0 01.86-.52L12.09 9h5.41c.28 0 .5.22.5.5v.5c0 .7-.09 1.36-.25 2H2.25A8.01 8.01 0 012 10v-.5c0-.28.22-.5.5-.5h5.41L4.07 2.76a.5.5 0 01.17-.69zM10 18a8 8 0 01-7.42-5h14.84A8 8 0 0110 18z" />
		</svg>
	)
}
export default BowlChopsticksIcon
