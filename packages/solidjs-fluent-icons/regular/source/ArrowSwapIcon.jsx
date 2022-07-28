import { splitProps } from "solid-js"
function ArrowSwapIcon(props) {
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
			<path d="M12.15 3.15c.2-.2.5-.2.7 0l3 3c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7-.7L14.29 7H4.5a.5.5 0 010-1h9.8l-2.15-2.15a.5.5 0 010-.7zm-4.3 7c.2.2.2.5 0 .7L5.71 13h9.79a.5.5 0 010 1H5.7l2.15 2.15a.5.5 0 01-.7.7l-3-3a.5.5 0 010-.7l3-3c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default ArrowSwapIcon
