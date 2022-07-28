import { splitProps } from "solid-js"
function ChevronUpIcon(props) {
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
			<path d="M4.15 12.35a.5.5 0 010-.7L9.6 6.16a.55.55 0 01.78 0l5.46 5.49a.5.5 0 01-.7.7L10 7.2l-5.15 5.16a.5.5 0 01-.7 0z" />
		</svg>
	)
}
export default ChevronUpIcon
