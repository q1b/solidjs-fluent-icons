import { splitProps } from "solid-js"
function MicPulseOffIcon(props) {
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
			<path d="M6 6.7V10a3 3 0 003.2 3c.22-.76.59-1.44 1.07-2.02l.71.71a4.5 4.5 0 006.37 6.29.5.5 0 00.5-.83l-15-15a.5.5 0 10-.7.7L6 6.71zm9.11 9.12l-.15.37a.5.5 0 01-.93-.02l-.64-1.8-.22.5a.5.5 0 01-.46.3H12a.5.5 0 010-1h.38l.33-.76 2.4 2.4zm3.45.62a4.5 4.5 0 00-6-6l6 6zM6.16 4.04l5.66 5.66.18-.1V5a3 3 0 00-5.84-.96zM4.5 10a.5.5 0 00-1 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 014.5 10z" />
		</svg>
	)
}
export default MicPulseOffIcon
