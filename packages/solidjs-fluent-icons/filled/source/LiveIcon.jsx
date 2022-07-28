import { splitProps } from "solid-js"
function LiveIcon(props) {
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
			<path d="M5.45 4.17a.73.73 0 00-1.02-.01 8.23 8.23 0 00.17 11.86c.3.27.74.24 1.01-.03a.78.78 0 00-.02-1.11 6.73 6.73 0 01-.15-9.62c.3-.3.32-.78.01-1.1zm1.76 1.76a.71.71 0 00-1-.02 5.73 5.73 0 00.18 8.35c.3.27.73.23.99-.03.32-.33.26-.85-.04-1.14a4.24 4.24 0 01-.14-6.05c.29-.3.33-.8.01-1.11zm5.58 0a.71.71 0 011-.02 5.73 5.73 0 01-.18 8.35.71.71 0 01-.99-.03c-.32-.33-.26-.85.04-1.14a4.24 4.24 0 00.14-6.05c-.29-.3-.33-.8-.01-1.11zm1.76-1.76a.73.73 0 011.02-.01 8.23 8.23 0 01-.17 11.86.73.73 0 01-1.01-.03.78.78 0 01.02-1.11 6.73 6.73 0 00.15-9.62.78.78 0 01-.01-1.1zM10 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
		</svg>
	)
}
export default LiveIcon
