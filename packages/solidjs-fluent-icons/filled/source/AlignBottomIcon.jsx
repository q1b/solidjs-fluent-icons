import { splitProps } from "solid-js"
function AlignBottomIcon(props) {
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
			<path d="M2.5 17a.5.5 0 010-1h15a.5.5 0 010 1h-15zM4 13c0 1.1.9 2 2 2h1a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8zm7 0c0 1.1.9 2 2 2h1a2 2 0 002-2V8a2 2 0 00-2-2h-1a2 2 0 00-2 2v5z" />
		</svg>
	)
}
export default AlignBottomIcon
