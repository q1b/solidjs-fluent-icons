import { splitProps } from "solid-js"
function ArrowForwardIcon(props) {
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
			<path d="M15.69 9.5l-2.96 2.96a.75.75 0 00.97 1.14l.09-.08 4.24-4.24a.75.75 0 00.07-.98l-.07-.08-4.24-4.24a.75.75 0 00-1.14.97l.08.09L15.69 8H10a7.75 7.75 0 00-7.75 7.5v.25a.75.75 0 001.5 0A6.25 6.25 0 019.77 9.5H15.7z" />
		</svg>
	)
}
export default ArrowForwardIcon
