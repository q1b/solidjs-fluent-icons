import { splitProps } from "solid-js"
function PowerIcon(props) {
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
			<path d="M10.5 2.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6zM13.74 4a.5.5 0 10-.5.87 6.5 6.5 0 11-6.49 0 .5.5 0 10-.5-.87 7.5 7.5 0 107.5 0z" />
		</svg>
	)
}
export default PowerIcon
