import { splitProps } from "solid-js"
function RibbonOffIcon(props) {
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
			<path d="M4.62 5.33a6 6 0 008.04 8.04l.75.75A6.97 6.97 0 016 13.75v3.75a.5.5 0 00.8.4L10 16l3.2 1.9a.5.5 0 00.8-.4v-2.8l3.15 3.15a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7l2.47 2.48zm1.2-1.63l8.48 8.48A6 6 0 005.82 3.7z" />
		</svg>
	)
}
export default RibbonOffIcon
