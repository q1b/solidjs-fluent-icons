import { splitProps } from "solid-js"
function ToggleMultipleIcon(props) {
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
			<path d="M3 5.5A3.5 3.5 0 016.5 2h7a3.5 3.5 0 110 7h-7A3.5 3.5 0 013 5.5zm5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM6.5 11a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
		</svg>
	)
}
export default ToggleMultipleIcon
