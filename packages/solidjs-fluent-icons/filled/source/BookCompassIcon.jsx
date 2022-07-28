import { splitProps } from "solid-js"
function BookCompassIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2V4zm6 .5a.5.5 0 00-.5.5v1.06a2 2 0 00-.74 3.5L7.54 12.3a.5.5 0 00.92.4l1.21-2.73a2.01 2.01 0 00.66 0l1.21 2.73a.5.5 0 10.92-.4l-1.22-2.73a2 2 0 00-.74-3.5V5a.5.5 0 00-.5-.5zm-.5 2.63a1 1 0 101 1.74 1 1 0 00-1-1.74z" />
		</svg>
	)
}
export default BookCompassIcon
