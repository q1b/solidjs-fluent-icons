import { splitProps } from "solid-js"
function SwipeDownIcon(props) {
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
			<path d="M14 6a4 4 0 01-2.25 3.6V8.44a3 3 0 10-3.5 0V9.6A4 4 0 1114 6zM9.47 17.78c.3.3.77.3 1.06 0l2.5-2.5a.75.75 0 10-1.06-1.06l-1.22 1.22V5.75a.75.75 0 00-1.5 0v9.69l-1.22-1.22a.75.75 0 00-1.06 1.06l2.5 2.5z" />
		</svg>
	)
}
export default SwipeDownIcon
