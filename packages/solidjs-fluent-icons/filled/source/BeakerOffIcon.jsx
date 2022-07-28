import { splitProps } from "solid-js"
function BeakerOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l5.1 5.1v.8c0 .4-.1.81-.3 1.18l-.84 1.57h4.68l1 1H5.58l-1.23 2.3A1.5 1.5 0 005.67 17h8.66c.55 0 1-.29 1.27-.7l1.55 1.55a.5.5 0 00.7-.7l-15-15zm4.4 2.98l6.37 6.37h.27l-.84-1.57a2.5 2.5 0 01-.3-1.18V4h.75a.5.5 0 000-1h-7a.5.5 0 000 1h.75v1.13z" />
		</svg>
	)
}
export default BeakerOffIcon
