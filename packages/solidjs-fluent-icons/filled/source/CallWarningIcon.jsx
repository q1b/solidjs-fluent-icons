import { splitProps } from "solid-js"
function CallWarningIcon(props) {
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
			<path d="M12.6 1.55l-3.5 7A1 1 0 0010 10h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM14 3.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zM13.5 9a.5.5 0 110-1 .5.5 0 010 1zM6.54 2.12a4.1 4.1 0 00-2.99.32 2.87 2.87 0 00-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 009 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 001.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 00-3.07-1.12l-.67.26c-.32.12-.62.06-.79-.1A4.32 4.32 0 017.1 9.19c-.06-.26.06-.56.34-.78l.6-.45a2.5 2.5 0 00.67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9z" />
		</svg>
	)
}
export default CallWarningIcon
