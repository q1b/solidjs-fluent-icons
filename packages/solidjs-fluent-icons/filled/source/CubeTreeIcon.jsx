import { splitProps } from "solid-js"
function CubeTreeIcon(props) {
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
			<path d="M9.57 2.07c.28-.09.58-.09.86 0l2.85.85a1 1 0 01.72.95v4.26a1 1 0 01-.72.96l-2.79.83a.5.5 0 01.01.08v1H12a2 2 0 012 2v.05a2.5 2.5 0 11-1 0V13a1 1 0 00-1-1H8a1 1 0 00-1 1v.05a2.5 2.5 0 11-1 0V13c0-1.1.9-2 2-2h1.5v-1a.5.5 0 010-.08l-2.78-.83A1 1 0 016 8.13V3.87a1 1 0 01.72-.95l2.85-.85zm-.91 2.46a.5.5 0 00-.32.95l1.16.38V7a.5.5 0 001 0V5.86l1.16-.38a.5.5 0 10-.32-.95L10 4.97l-1.34-.44z" />
		</svg>
	)
}
export default CubeTreeIcon
