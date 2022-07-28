import { splitProps } from "solid-js"
function PointScanIcon(props) {
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
			<path d="M9 2.5a.5.5 0 00-1 0v4.02A5 5 0 003.52 11H8V6.52a5.07 5.07 0 011 0V2.5zM2.5 11h1.02a5.06 5.06 0 000 1H2.5a.5.5 0 010-1zM8 17.5v-1.02a5.07 5.07 0 001 0v1.02a.5.5 0 01-1 0zm5.48-5.5h4.02a.5.5 0 000-1h-4.02a5.07 5.07 0 010 1H9v4.48A5 5 0 0013.48 12zM8 16.48A5 5 0 013.52 12H8v4.48zM9 11h4.48A5 5 0 009 6.52V11z" />
		</svg>
	)
}
export default PointScanIcon
