import { splitProps } from "solid-js"
function PlayCircleIcon(props) {
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
			<path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6-2.17v4.34c0 .57.63.94 1.13.65l4.12-2.39a.5.5 0 000-.86L9.13 7.18A.75.75 0 008 7.83z" />
		</svg>
	)
}
export default PlayCircleIcon
