import { splitProps } from "solid-js"
function MaximizeIcon(props) {
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
			<path d="M3 5.25C3 4.01 4 3 5.25 3h9.5C15.99 3 17 4 17 5.25v9.5c0 1.24-1 2.25-2.25 2.25h-9.5C4.01 17 3 16 3 14.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .41.34.75.75.75h9.5c.41 0 .75-.34.75-.75v-9.5a.75.75 0 00-.75-.75h-9.5z" />
		</svg>
	)
}
export default MaximizeIcon
