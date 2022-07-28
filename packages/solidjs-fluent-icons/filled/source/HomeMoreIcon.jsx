import { splitProps } from "solid-js"
function HomeMoreIcon(props) {
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
			<path d="M11 2.38a1.5 1.5 0 00-2 0L3.5 7.33c-.32.28-.5.69-.5 1.11v7.06c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.44c0-.42-.18-.83-.5-1.11L11 2.38zM7 11a1 1 0 110-2 1 1 0 010 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 110-2 1 1 0 010 2zm-5 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 110-2 1 1 0 010 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default HomeMoreIcon
