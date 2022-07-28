import { splitProps } from "solid-js"
function ArrowCircleUpLeftIcon(props) {
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
			<path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.15 7.14A.5.5 0 017.5 7h5a.5.5 0 010 1H8.7l4.15 4.15a.5.5 0 01-.7.7L8 8.71v3.79a.5.5 0 01-1 0v-5a.5.5 0 01.14-.35z" />
		</svg>
	)
}
export default ArrowCircleUpLeftIcon
