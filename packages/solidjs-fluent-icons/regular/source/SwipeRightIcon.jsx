import { splitProps } from "solid-js"
function SwipeRightIcon(props) {
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
			<path d="M6 6a4 4 0 013.7 2.5H8.6a3 3 0 100 3h1.1A4 4 0 116 6zm8.85 7.35l3-3a.5.5 0 000-.7l-3-3a.5.5 0 10-.7.7l2.14 2.15H5.5a.5.5 0 000 1h10.8l-2.15 2.15a.5.5 0 00.7.7z" />
		</svg>
	)
}
export default SwipeRightIcon
