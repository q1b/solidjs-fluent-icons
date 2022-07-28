import { splitProps } from "solid-js"
function BalloonIcon(props) {
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
			<path d="M5 7a5 5 0 0110 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 01-2.9 2.1V14a1 1 0 001 1H14a2 2 0 012 2v.5a.5.5 0 01-1 0V17a1 1 0 00-1-1h-2.5a2 2 0 01-2-2v-.05a5.06 5.06 0 01-2.9-2.09C5.66 10.6 5 8.86 5 7zm5.57-3a.5.5 0 10-.14 1c.81.11 1.46.76 1.57 1.57a.5.5 0 001-.14A2.86 2.86 0 0010.56 4z" />
		</svg>
	)
}
export default BalloonIcon
