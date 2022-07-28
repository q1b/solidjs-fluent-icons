import { splitProps } from "solid-js"
function SidebarSearchLtrIcon(props) {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-2.59a1.5 1.5 0 00-.35-.56l-2-2A4.49 4.49 0 005.5 8c-.93 0-1.78.28-2.5.76V5.5zm10 1v7a.5.5 0 001 0v-7a.5.5 0 00-1 0zm-4 6c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L7.6 15.3A3.5 3.5 0 119 12.5zm-1 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
		</svg>
	)
}
export default SidebarSearchLtrIcon
