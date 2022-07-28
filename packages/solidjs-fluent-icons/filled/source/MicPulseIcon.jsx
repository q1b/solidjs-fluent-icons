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
			<path d="M4.5 10a.5.5 0 00-1 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 014.5 10zM12 5v4.6A5.51 5.51 0 009.2 13 3.02 3.02 0 016 10V5a3 3 0 016 0zm7 9.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-5.56-2c.21 0 .39.14.46.33l.63 1.76.58-1.44a.5.5 0 01.9-.05l.58 1.07H17a.5.5 0 110 1h-.71a.5.5 0 01-.44-.27l-.21-.39-.68 1.68a.5.5 0 01-.93-.02l-.64-1.8-.22.5a.5.5 0 01-.46.3H12a.5.5 0 010-1h.38l.59-1.37a.5.5 0 01.47-.3z" />
		</svg>
	)
}
export default MicPulseIcon
