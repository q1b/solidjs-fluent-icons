import { splitProps } from "solid-js"
function ArrowDownIcon(props) {
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
			<path d="M16.8 11.27a.75.75 0 00-1.1-1.04l-4.95 5.24V2.75a.75.75 0 00-1.5 0v12.73l-4.96-5.25a.75.75 0 00-1.09 1.04l6.07 6.41a1 1 0 001.45 0l6.07-6.41z" />
		</svg>
	)
}
export default ArrowDownIcon
