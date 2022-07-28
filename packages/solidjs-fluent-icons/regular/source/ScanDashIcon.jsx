import { splitProps } from "solid-js"
function ScanDashIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v1.5a.5.5 0 001 0V6c0-1.1.9-2 2-2h1.5a.5.5 0 000-1H6zm6.5 0a.5.5 0 000 1H14a2 2 0 012 2v1.5a.5.5 0 001 0V6a3 3 0 00-3-3h-1.5zM4 12.5a.5.5 0 00-1 0V14a3 3 0 003 3h1.5a.5.5 0 000-1H6a2 2 0 01-2-2v-1.5zm13 0a.5.5 0 00-1 0V14a2 2 0 01-2 2h-1.5a.5.5 0 000 1H14a3 3 0 003-3v-1.5zm-10.5-3a.5.5 0 000 1h7a.5.5 0 000-1h-7z" />
		</svg>
	)
}
export default ScanDashIcon
