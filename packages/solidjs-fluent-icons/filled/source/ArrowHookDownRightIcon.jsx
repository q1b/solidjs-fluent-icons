import { splitProps } from "solid-js"
function ArrowHookDownRightIcon(props) {
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
			<path d="M9 14c.06 0-.06 0 0 0h4.65l-2.27 2.27a.75.75 0 101.06 1.06l3.35-3.35a.75.75 0 00.21-.64.75.75 0 00-.21-.45l-3.25-3.24a.75.75 0 10-1.06 1.06l1.8 1.79H9a3.5 3.5 0 110-7h4.25a.75.75 0 000-1.5H9a5 5 0 000 10z" />
		</svg>
	)
}
export default ArrowHookDownRightIcon
