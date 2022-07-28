import { splitProps } from "solid-js"
function AutoFitWidthIcon(props) {
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
			<path d="M18 4.25a.75.75 0 00-1.5 0v11a.75.75 0 001.5 0v-11zm-14.5 0a.75.75 0 00-1.5 0v11a.75.75 0 001.5 0v-11zm1.72 6.03l2 2a.75.75 0 001.06-1.06l-.72-.72h4.88l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H7.56l.72-.72a.75.75 0 00-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06z" />
		</svg>
	)
}
export default AutoFitWidthIcon
