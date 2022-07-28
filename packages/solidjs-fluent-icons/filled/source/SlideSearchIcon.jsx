import { splitProps } from "solid-js"
function SlideSearchIcon(props) {
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
			<path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-5.38l-1.56-1.56c.21-.44.36-.93.41-1.44h3.53a.5.5 0 000-1H8.97a4.47 4.47 0 00-.44-1.5h5.97a.5.5 0 000-1H7.85A4.49 4.49 0 002 8.76V6.5zm3.5.5a.5.5 0 000 1h6a.5.5 0 000-1h-6zm-1 9c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L7.3 14.6A3.5 3.5 0 104.5 16zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
		</svg>
	)
}
export default SlideSearchIcon
