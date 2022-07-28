import { splitProps } from "solid-js"
function EqualOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L6.29 7H3.5a.5.5 0 000 1h3.8l4 4H3.5a.5.5 0 000 1h8.8l4.85 4.85a.5.5 0 00.7-.7l-15-15zM14.12 12l1 1h1.38a.5.5 0 000-1h-2.38zm-5-5l1 1h6.38a.5.5 0 000-1H9.12z" />
		</svg>
	)
}
export default EqualOffIcon
