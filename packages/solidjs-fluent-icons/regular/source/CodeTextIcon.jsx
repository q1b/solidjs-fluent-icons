import { splitProps } from "solid-js"
function CodeTextIcon(props) {
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
			<path d="M2.5 5a.5.5 0 000 1H8a.5.5 0 000-1H2.5zm3 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 11.5c0-.28.22-.5.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zM2.5 14a.5.5 0 000 1H11a.5.5 0 000-1H2.5zm10-5.5c0-.28.22-.5.5-.5h3.5a.5.5 0 010 1H13a.5.5 0 01-.5-.5zm-2-3.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z" />
		</svg>
	)
}
export default CodeTextIcon
