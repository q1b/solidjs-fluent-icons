import { splitProps } from "solid-js"
function LineStyleIcon(props) {
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
			<path d="M2 4.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-12 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM3 14a1 1 0 100 2h14a1 1 0 100-2H3z" />
		</svg>
	)
}
export default LineStyleIcon
