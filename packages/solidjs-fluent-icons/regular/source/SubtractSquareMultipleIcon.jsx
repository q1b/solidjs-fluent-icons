import { splitProps } from "solid-js"
function SubtractSquareMultipleIcon(props) {
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
			<path d="M16 5.27V13a3 3 0 01-3 3H5.27c.34.6.99 1 1.73 1h6a4 4 0 004-4V7a2 2 0 00-1-1.73zM11.5 9.5a.5.5 0 000-1h-5a.5.5 0 100 1h5zM13 3a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8zm1 2a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V5z" />
		</svg>
	)
}
export default SubtractSquareMultipleIcon
