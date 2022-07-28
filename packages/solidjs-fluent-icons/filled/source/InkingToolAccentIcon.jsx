import { splitProps } from "solid-js"
function InkingToolAccentIcon(props) {
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
			<path d="M17 6V3H3v3c0 .28.22.5.5.5h13A.5.5 0 0017 6zm-4.55 1l-2.4 4.78a.5.5 0 10.9.44L13.56 7 13 6.5l-.55.5zM10 17.5c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5z" />
		</svg>
	)
}
export default InkingToolAccentIcon
