import { splitProps } from "solid-js"
function RadarIcon(props) {
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
			<path d="M14.28 3.24l-1.09 1.1a6.5 6.5 0 101.4 10.26.75.75 0 011.07 1.06 8 8 0 11-1.38-12.42zm-3.3 3.3l1.17-1.17a5.1 5.1 0 101.46 8.24.75.75 0 10-1.06-1.06 3.6 3.6 0 11-1.56-6.01zm4.8-2.32c.3.3.3.77 0 1.06l-4.33 4.33a1.5 1.5 0 11-1.06-1.06l4.33-4.33c.3-.3.77-.3 1.06 0zm1.47 9.03a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 7.5a.75.75 0 100-1.5.75.75 0 000 1.5zm1.5 3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default RadarIcon
