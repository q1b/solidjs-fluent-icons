import { splitProps } from "solid-js"
function ReOrderIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
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
			<path d="M2.75 9.25h10.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h10.6-10.5zm0-4h10.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h10.6-10.5z" />
		</svg>
	)
}
export default ReOrderIcon
