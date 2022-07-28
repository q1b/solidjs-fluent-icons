import { splitProps } from "solid-js"
function MicPulseIcon(props) {
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
			<path d="M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 017 10V5a2 2 0 114 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 10-6 0v5a3 3 0 003 3zm-4.5-3A4.5 4.5 0 009 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0zM19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-5.56-2c.21 0 .39.14.46.33l.63 1.76.58-1.44a.5.5 0 01.9-.05l.58 1.07H17a.5.5 0 110 1h-.71a.5.5 0 01-.44-.27l-.21-.39-.68 1.68a.5.5 0 01-.93-.02l-.64-1.8-.22.5a.5.5 0 01-.46.3H12a.5.5 0 010-1h.38l.59-1.37a.5.5 0 01.47-.3z" />
		</svg>
	)
}
export default MicPulseIcon
