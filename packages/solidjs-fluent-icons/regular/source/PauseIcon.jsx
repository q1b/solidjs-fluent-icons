import { splitProps } from "solid-js"
function PauseIcon(props) {
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
			<path d="M5 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2H5zM4 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm9-2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2zm-1 2a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
		</svg>
	)
}
export default PauseIcon
