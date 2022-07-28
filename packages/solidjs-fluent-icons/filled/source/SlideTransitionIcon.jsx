import { splitProps } from "solid-js"
function SlideTransitionIcon(props) {
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
			<path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zM6 5H5v10h1V5zm3 0H8v10h1V5zm3 0v10h1V5h-1z" />
		</svg>
	)
}
export default SlideTransitionIcon
