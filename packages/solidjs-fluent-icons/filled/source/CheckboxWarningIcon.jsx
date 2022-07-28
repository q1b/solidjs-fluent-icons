import { splitProps } from "solid-js"
function CheckboxWarningIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.27l3.44-6.9a2 2 0 013.58 0l.71 1.42V6a3 3 0 00-3-3H6zm7.85 4.85l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 4.65-4.64a.5.5 0 01.7.7zm-.25 2.7l-3.5 7A1 1 0 0011 19h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 12.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" />
		</svg>
	)
}
export default CheckboxWarningIcon
