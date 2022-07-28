import { splitProps } from "solid-js"
function SidebarSearchRtlIcon(props) {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v7a4.5 4.5 0 10-4.5 4.5h-7A2.5 2.5 0 013 14.5v-9zm3 1v7a.5.5 0 001 0v-7a.5.5 0 00-1 0zm10 6c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L14.6 15.3a3.5 3.5 0 111.4-2.8zm-1 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
		</svg>
	)
}
export default SidebarSearchRtlIcon
