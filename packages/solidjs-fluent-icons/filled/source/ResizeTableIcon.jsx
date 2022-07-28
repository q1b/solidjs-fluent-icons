import { splitProps } from "solid-js"
function ResizeTableIcon(props) {
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
			<path d="M5 2a3 3 0 00-3 3v2.35c.29-.32.62-.6 1-.81V5c0-1.1.9-2 2-2h3.5a.5.5 0 000-1H5zm10 16h-2.35c.32-.29.6-.62.81-1H15a2 2 0 002-2v-3.5a.5.5 0 011 0V15a3 3 0 01-3 3zM11.5 2a.5.5 0 000 1H15a2 2 0 012 2v3.5a.5.5 0 001 0V5a3 3 0 00-3-3h-3.5zM5 7a3 3 0 00-3 3h3V7zm0 4v3H2v-3h3zm0 4H2a3 3 0 003 3v-3zm1 0h3v3H6v-3zm0-1h3v-3H6v3zm4 1h3a3 3 0 01-3 3v-3zm0-4v3h3v-3h-3zm0-1V7a3 3 0 013 3h-3zM6 7h3v3H6V7z" />
		</svg>
	)
}
export default ResizeTableIcon
