import { splitProps } from "solid-js"
function CircleImageIcon(props) {
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
			<path d="M7.5 3a4.5 4.5 0 00-.5 8.97v1A5.5 5.5 0 1112.98 7h-1A4.5 4.5 0 007.5 3zm8.5 8a1 1 0 11-2 0 1 1 0 012 0zm-5.5-3A2.5 2.5 0 008 10.5v5a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0015.5 8h-5zM9 10.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .23-.05.45-.15.65l-2.44-2.44a2 2 0 00-2.82 0l-2.44 2.44A1.5 1.5 0 019 15.5v-5zm.85 6.35l2.44-2.44a1 1 0 011.42 0l2.44 2.44c-.2.1-.42.15-.65.15h-5a1.5 1.5 0 01-.65-.15z" />
		</svg>
	)
}
export default CircleImageIcon
