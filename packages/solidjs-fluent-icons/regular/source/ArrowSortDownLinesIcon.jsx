import { splitProps } from "solid-js"
function ArrowSortDownLinesIcon(props) {
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
			<path d="M7.2 15.29l2.65-2.64a.5.5 0 01.71.7L7.1 16.82a.5.5 0 01-.74.03l-3.5-3.5a.5.5 0 11.71-.7l2.65 2.64V3.5a.5.5 0 011 0v11.79zM9.5 4a.5.5 0 000 1h7a.5.5 0 100-1h-7zm0 3a.5.5 0 000 1h5a.5.5 0 100-1h-5zm0 3a.5.5 0 000 1h2a.5.5 0 100-1h-2z" />
		</svg>
	)
}
export default ArrowSortDownLinesIcon
