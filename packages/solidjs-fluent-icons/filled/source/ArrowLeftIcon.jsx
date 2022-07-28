import { splitProps } from "solid-js"
function ArrowLeftIcon(props) {
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
			<path d="M8.73 16.8a.75.75 0 001.03-1.1l-5.24-4.95h12.73a.75.75 0 000-1.5H4.52l5.24-4.96A.75.75 0 108.73 3.2L2.31 9.27a1 1 0 000 1.46l6.42 6.07z" />
		</svg>
	)
}
export default ArrowLeftIcon
