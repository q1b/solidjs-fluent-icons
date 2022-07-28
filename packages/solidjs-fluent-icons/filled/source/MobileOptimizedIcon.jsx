import { splitProps } from "solid-js"
function MobileOptimizedIcon(props) {
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
			<path d="M4.5 2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H4V2.5c0-.28.22-.5.5-.5zm11 0c.28 0 .5.22.5.5V4h1.5a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5zm-11 16a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 000 1H4v1.5c0 .28.22.5.5.5zm11 0a.5.5 0 00.5-.5V16h1.5a.5.5 0 000-1h-2a.5.5 0 00-.5.5v2c0 .28.22.5.5.5zM6 6a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1H7a1 1 0 01-1-1V6zm2 2.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zm0 2c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default MobileOptimizedIcon
