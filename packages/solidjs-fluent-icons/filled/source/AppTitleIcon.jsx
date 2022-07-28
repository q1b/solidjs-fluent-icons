import { splitProps } from "solid-js"
function AppTitleIcon(props) {
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
			<path d="M7 3a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3H7zM4.5 17a.5.5 0 000 1h11a.5.5 0 000-1h-11z" />
		</svg>
	)
}
export default AppTitleIcon
