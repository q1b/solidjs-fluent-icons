import { splitProps } from "solid-js"
function WeatherMoonIcon(props) {
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
			<path d="M16.36 14a7.98 7.98 0 01-13.48.54.6.6 0 01.29-.9c3-1.08 4.61-2.33 5.55-4.11.98-1.88 1.24-3.94.55-6.76a.6.6 0 01.61-.73A7.98 7.98 0 0116.36 14z" />
		</svg>
	)
}
export default WeatherMoonIcon
