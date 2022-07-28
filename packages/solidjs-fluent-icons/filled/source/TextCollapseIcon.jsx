import { splitProps } from "solid-js"
function TextCollapseIcon(props) {
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
			<path d="M5 3.5c0-.41.34-.75.75-.75h11.5a.75.75 0 010 1.5H5.75A.75.75 0 015 3.5zm0 12c0-.41.34-.75.75-.75h11.5a.75.75 0 010 1.5H5.75A.75.75 0 015 15.5zm6.75-8.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM11 11.5c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm-2-2a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-6 0c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default TextCollapseIcon
