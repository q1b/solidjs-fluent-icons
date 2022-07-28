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
			<path d="M5.5 7.96a3 3 0 10-1 0v4.08a3 3 0 101 0V7.96zM5 7a2 2 0 110-4 2 2 0 010 4zm2 8a2 2 0 11-4 0 2 2 0 014 0zm4.15-8.15a.5.5 0 00.7-.7L10.71 5h1.79A2.5 2.5 0 0115 7.5V12a3 3 0 101 .17V7.5A3.5 3.5 0 0012.5 4h-1.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2zM17 15a2 2 0 11-4 0 2 2 0 014 0z" />
		</svg>
	)
}
export default BranchRequestIcon
