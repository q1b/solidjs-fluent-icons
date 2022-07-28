import { splitProps } from "solid-js"
function StackIcon(props) {
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
			<path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H4zm2 11a2 2 0 01-1.73-1H12a3 3 0 003-3V5.27c.6.34 1 .99 1 1.73v4a4 4 0 01-4 4H6zm2 2a2 2 0 01-1.73-1H12a5 5 0 005-5V7.27c.6.34 1 .99 1 1.73v2a6 6 0 01-6 6H8z" />
		</svg>
	)
}
export default StackIcon
