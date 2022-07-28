import { splitProps } from "solid-js"
function SplitHintIcon(props) {
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
			<path d="M9.5 2c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zM2 6c0-1.1.9-2 2-2h4v1H4a1 1 0 00-1 1v8a1 1 0 001 1h4v1H4a2 2 0 01-2-2V6zm13-1a1 1 0 011 1v.5a.5.5 0 001 0V6a2 2 0 00-2-2h-.5a.5.5 0 000 1h.5zm0 10a1 1 0 001-1v-.5a.5.5 0 011 0v.5a2 2 0 01-2 2h-.5a.5.5 0 010-1h.5zm1.5-7a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm-4-4a.5.5 0 010 1h-1a.5.5 0 010-1h1zm.5 11.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default SplitHintIcon
