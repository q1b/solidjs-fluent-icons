import { splitProps } from "solid-js"
function RibbonIcon(props) {
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
			<path d="M16 8A6 6 0 114 8a6 6 0 0112 0zm-6 7c1.49 0 2.87-.46 4-1.25v3.75a.5.5 0 01-.8.4L10 16l-3.2 1.9a.5.5 0 01-.8-.4v-3.75A6.97 6.97 0 0010 15z" />
		</svg>
	)
}
export default RibbonIcon
