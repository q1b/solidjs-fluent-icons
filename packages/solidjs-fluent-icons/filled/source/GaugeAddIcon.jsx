import { splitProps } from "solid-js"
function GaugeAddIcon(props) {
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
			<path d="M10 18a8 8 0 10-8-7.75c.6-.48 1.3-.85 2.05-1.06a6 6 0 018.13-4.78.5.5 0 01-.36.93A5 5 0 005.1 9.01a5.58 5.58 0 013.57 1c.06-.17.15-.34.28-.48.07-.09.2-.2.34-.33l.56-.48a125.12 125.12 0 012.96-2.4l.27-.22.37-.3a.5.5 0 01.75.64l-.11.2a323.59 323.59 0 01-.69 1.2l-.23.4-.3.53a184.46 184.46 0 01-1.48 2.48 4.28 4.28 0 01-.16.23 1.5 1.5 0 01-.84.5A5.48 5.48 0 019.75 18H10zm5.6-10.18a6 6 0 01-1.36 6.42.5.5 0 11-.7-.7 5 5 0 001.12-5.36.5.5 0 01.93-.36zM8 18.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5a.5.5 0 00-.15-.35z" />
		</svg>
	)
}
export default GaugeAddIcon
