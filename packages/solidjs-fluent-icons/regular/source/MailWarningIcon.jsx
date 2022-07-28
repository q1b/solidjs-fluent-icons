import { splitProps } from "solid-js"
function MailWarningIcon(props) {
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
			<path d="M13.6 1.55l-3.5 7A1 1 0 0011 10h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 3.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zM14.5 9a.5.5 0 110-1 .5.5 0 010 1zm-10-5h6.77l-.5 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12.17-.1a2 2 0 00.84.18h.83l-1.59.93a.5.5 0 01-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V11h1v3.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4z" />
		</svg>
	)
}
export default MailWarningIcon
