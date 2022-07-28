import { splitProps } from "solid-js"
function ShareAndroidIcon(props) {
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
			<path d="M17 5.5a2.5 2.5 0 01-4.47 1.54L7.92 9.35a2.5 2.5 0 010 1.3l4.61 2.3a2.5 2.5 0 11-.45.9l-4.61-2.3a2.5 2.5 0 110-3.1l4.61-2.3A2.5 2.5 0 1117 5.5z" />
		</svg>
	)
}
export default ShareAndroidIcon
