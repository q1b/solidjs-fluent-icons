import { splitProps } from "solid-js"
function DatabaseWarningIcon(props) {
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
			<path d="M16 5c0 1.66-2.69 3-6 3S4 6.66 4 5s2.69-3 6-3 6 1.34 6 3zm-1.31 3.02l.31-.17v.21c-.53.14-1 .48-1.29 1.05l-3.5 7c-.31.64-.25 1.34.06 1.89H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98zm-.09 1.53l-3.5 7A1 1 0 0012 18h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM16 11.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" />
		</svg>
	)
}
export default DatabaseWarningIcon
