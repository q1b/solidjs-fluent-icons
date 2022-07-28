import { splitProps } from "solid-js"
function ConnectedIcon(props) {
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
			<path d="M7 4.5c0 .51-.15.98-.41 1.38L8.62 7.9a2.49 2.49 0 012.76 0l2.03-2.03a2.5 2.5 0 11.7.7L12.1 8.63a2.49 2.49 0 010 2.76l2.03 2.03a2.5 2.5 0 11-.7.7l-2.04-2.02a2.49 2.49 0 01-2.76 0L6.6 14.12a2.5 2.5 0 11-.7-.7l2.02-2.04a2.49 2.49 0 010-2.76L5.88 6.6A2.5 2.5 0 117 4.5z" />
		</svg>
	)
}
export default ConnectedIcon
