import { splitProps } from "solid-js"
function ChevronDoubleLeftIcon(props) {
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
			<path d="M11.35 15.85a.5.5 0 01-.7 0L5.16 10.4a.55.55 0 010-.78l5.49-5.46a.5.5 0 11.7.7L6.2 10l5.16 5.15c.2.2.2.5 0 .7zm4 0a.5.5 0 01-.7 0L9.16 10.4a.55.55 0 010-.78l5.49-5.46a.5.5 0 11.7.7L10.2 10l5.16 5.15c.2.2.2.5 0 .7z" />
		</svg>
	)
}
export default ChevronDoubleLeftIcon
