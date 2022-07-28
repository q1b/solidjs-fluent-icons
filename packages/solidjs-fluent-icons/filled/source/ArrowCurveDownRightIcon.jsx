import { splitProps } from "solid-js"
function ArrowCurveDownRightIcon(props) {
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
			<path d="M6.61 3.14a.75.75 0 11.78-1.28 7.2 7.2 0 012.98 3.13c.63 1.33.88 2.96.88 5.01v5.44l2.72-2.72a.75.75 0 111.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 011.06-1.06l2.72 2.72V10c0-1.95-.25-3.32-.74-4.37a5.71 5.71 0 00-2.4-2.49z" />
		</svg>
	)
}
export default ArrowCurveDownRightIcon
