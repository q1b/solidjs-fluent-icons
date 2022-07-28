import { splitProps } from "solid-js"
function RamIcon(props) {
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
			<path d="M5 7h2.5v3H5V7zm6.5 0v3h-3V7h3zm1 3H15V7h-2.5v3zm3.54-6c.26 0 .5.05.74.16A2.06 2.06 0 0118 5.96V11a2 2 0 01-1 1.73v1.77a1.45 1.45 0 01-.44 1.05c-.13.14-.3.25-.48.33-.19.09-.38.13-.58.12h-4a.48.48 0 01-.35-.15L10 14.7l-1.15 1.15c-.1.1-.21.15-.35.15h-4a1.45 1.45 0 01-1.05-.44c-.14-.13-.25-.3-.33-.48A1.32 1.32 0 013 14.5v-1.77c-.3-.17-.55-.42-.73-.73A2.06 2.06 0 012 11V5.96c0-.26.05-.5.16-.74A2.06 2.06 0 013.96 4h12.08zm-.66 2.08A.95.95 0 0015 6H5a.85.85 0 00-.4.08c-.12.06-.22.13-.31.22A1 1 0 004 7v3c0 .15.03.28.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.25.08.39.08h10c.14 0 .27-.02.4-.08.12-.06.22-.13.31-.22A1 1 0 0016 10V7a1 1 0 00-.3-.71 1.1 1.1 0 00-.32-.21z" />
		</svg>
	)
}
export default RamIcon
