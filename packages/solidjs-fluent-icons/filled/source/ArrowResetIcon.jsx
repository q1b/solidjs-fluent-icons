import { splitProps } from "solid-js"
function ArrowResetIcon(props) {
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
			<path d="M6.03 2.47c.3.3.3.77 0 1.06L4.81 4.75H11A6.25 6.25 0 114.75 11a.75.75 0 011.5 0A4.75 4.75 0 1011 6.25H4.81l1.22 1.22a.75.75 0 01-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5c.3-.3.77-.3 1.06 0z" />
		</svg>
	)
}
export default ArrowResetIcon
