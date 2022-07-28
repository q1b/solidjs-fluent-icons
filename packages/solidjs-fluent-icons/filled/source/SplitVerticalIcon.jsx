import { splitProps } from "solid-js"
function SplitVerticalIcon(props) {
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
			<path d="M10 2.5a.5.5 0 00-1 0v15a.5.5 0 001 0v-15zM2 6c0-1.1.9-2 2-2h4v12H4a2 2 0 01-2-2V6zm9 10h4a2 2 0 002-2V6a2 2 0 00-2-2h-4v12z" />
		</svg>
	)
}
export default SplitVerticalIcon
