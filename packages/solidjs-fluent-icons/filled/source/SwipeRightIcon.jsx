import { splitProps } from "solid-js"
function SwipeRightIcon(props) {
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
			<path d="M6 6a4 4 0 013.6 2.25H8.44a3 3 0 100 3.5H9.6A4 4 0 116 6zm9.28 7.03l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 00-1.06 1.06l1.22 1.22H5.75a.75.75 0 100 1.5h9.69l-1.22 1.22a.75.75 0 101.06 1.06z" />
		</svg>
	)
}
export default SwipeRightIcon
