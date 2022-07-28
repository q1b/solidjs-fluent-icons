import { splitProps } from "solid-js"
function BranchRequestIcon(props) {
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
			<path d="M8 5a3 3 0 01-2.5 2.96v4.08a3 3 0 11-1 0V7.96A3 3 0 118 5zm3.85 1.85a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L10.71 4h1.79A3.5 3.5 0 0116 7.5v4.67a3 3 0 11-1-.17V7.5A2.5 2.5 0 0012.5 5h-1.8l1.15 1.15c.2.2.2.5 0 .7z" />
		</svg>
	)
}
export default BranchRequestIcon
