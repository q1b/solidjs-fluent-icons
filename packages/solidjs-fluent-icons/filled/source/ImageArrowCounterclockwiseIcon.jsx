import { splitProps } from "solid-js"
function ImageArrowCounterclockwiseIcon(props) {
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
			<path d="M5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2-5a.5.5 0 01-.5-.63V3a.5.5 0 011 0v.2a2.75 2.75 0 11-.55 4.14.5.5 0 01.75-.67A1.74 1.74 0 007.25 5.5 1.75 1.75 0 004.6 4H5a.5.5 0 010 1H3.5zm2 6c-.9 0-1.75-.22-2.5-.6V14c0 .65.2 1.25.56 1.74l5.39-5.3a1.5 1.5 0 012.1 0l5.4 5.3c.34-.49.55-1.1.55-1.74V6a3 3 0 00-3-3h-3.6a5.5 5.5 0 01-4.9 8zm7-3a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.7 0l-5.38 5.3z" />
		</svg>
	)
}
export default ImageArrowCounterclockwiseIcon
