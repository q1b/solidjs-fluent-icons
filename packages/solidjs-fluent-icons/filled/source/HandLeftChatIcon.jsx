import { splitProps } from "solid-js"
function HandLeftChatIcon(props) {
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
			<path d="M11 8.5V2.75a.75.75 0 00-1.5 0V8.5a.5.5 0 01-1 0V3.75a.75.75 0 00-1.5 0v6.5a4.06 4.06 0 00-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 00-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.24.45.42.75.83.9l.34-1.1a5.48 5.48 0 014.02-7.7.5.5 0 01-.01-.08V3.75a.75.75 0 00-1.5 0V8.5a.5.5 0 01-1 0zm5-3.25v3.96A5.5 5.5 0 0014.5 9V5.25a.75.75 0 011.5 0zm3 9.25a4.5 4.5 0 01-6.68 3.94l-1.8.54a.4.4 0 01-.5-.5l.54-1.8A4.5 4.5 0 1119 14.5zM12.5 13a.5.5 0 000 1h4a.5.5 0 000-1h-4zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default HandLeftChatIcon
