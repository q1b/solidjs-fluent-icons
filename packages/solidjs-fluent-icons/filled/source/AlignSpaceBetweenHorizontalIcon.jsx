import { splitProps } from "solid-js"
function AlignSpaceBetweenHorizontalIcon(props) {
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
			<path d="M3 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2H3z" />
			<path d="M16 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2h-1z" />
		</svg>
	)
}
export default AlignSpaceBetweenHorizontalIcon
