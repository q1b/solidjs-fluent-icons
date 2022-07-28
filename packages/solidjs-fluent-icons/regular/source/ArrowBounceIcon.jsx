import { splitProps } from "solid-js"
function ArrowBounceIcon(props) {
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
			<path d="M2.5 6a.5.5 0 00-.5.5v7a.5.5 0 001 0V7.7l7.15 7.15c.2.2.5.2.7 0l7-7a.5.5 0 00-.7-.7l-6.65 6.64L3.7 7h5.8a.5.5 0 000-1h-7z" />
		</svg>
	)
}
export default ArrowBounceIcon
