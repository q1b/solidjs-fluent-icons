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
			<path d="M8 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-5 0A3.5 3.5 0 006.5 9h7a3.5 3.5 0 100-7h-7A3.5 3.5 0 003 5.5zM6.5 3h7a2.5 2.5 0 010 5h-7a2.5 2.5 0 010-5zm7 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 14.5A3.5 3.5 0 006.5 18h7a3.5 3.5 0 100-7h-7A3.5 3.5 0 003 14.5zM6.5 12h7a2.5 2.5 0 010 5h-7a2.5 2.5 0 010-5z" />
		</svg>
	)
}
export default ToggleMultipleIcon
