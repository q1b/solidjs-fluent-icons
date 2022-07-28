import { splitProps } from "solid-js"
function ResizeIcon(props) {
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
			<path d="M5.25 2A3.25 3.25 0 002 5.25v3a.75.75 0 001.5 0v-3c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3zm6.5 0a.75.75 0 000 1.5h3c.97 0 1.75.78 1.75 1.75v3a.75.75 0 001.5 0v-3C18 3.45 16.54 2 14.75 2h-3zm-9 9c.41 0 .75.34.75.75v3c0 .97.78 1.75 1.75 1.75h3a.75.75 0 010 1.5h-3A3.25 3.25 0 012 14.75v-3c0-.41.34-.75.75-.75zm15.25.75a.75.75 0 00-1.5 0v3c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3z" />
		</svg>
	)
}
export default ResizeIcon
