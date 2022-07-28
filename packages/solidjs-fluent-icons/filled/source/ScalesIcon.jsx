import { splitProps } from "solid-js"
function ScalesIcon(props) {
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
			<path d="M3.5 3a.5.5 0 000 1h.75L2.08 9.22a.95.95 0 00-.08.4 3 3 0 006 0 .95.95 0 00-.08-.4L5.75 4H9.5v11h-4a1.5 1.5 0 000 3h9a1.5 1.5 0 000-3h-4V4h3.75l-2.17 5.22a.95.95 0 00-.08.4 3 3 0 006 0 .95.95 0 00-.08-.4L15.75 4h.75a.5.5 0 000-1h-13zM5 4.8L6.75 9h-3.5L5 4.8zM16.75 9h-3.5L15 4.8 16.75 9z" />
		</svg>
	)
}
export default ScalesIcon
