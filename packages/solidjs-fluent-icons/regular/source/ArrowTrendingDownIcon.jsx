import { splitProps } from "solid-js"
function ArrowTrendingDownIcon(props) {
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
			<path d="M17.96 14.7a.5.5 0 01-.46.3h-6a.5.5 0 010-1h4.8l-5.8-5.8-2.15 2.15a.5.5 0 01-.7 0l-5.5-5.5a.5.5 0 11.7-.7L8 9.29l2.15-2.14c.2-.2.5-.2.7 0L17 13.29V8.5a.5.5 0 011 0v6a.5.5 0 01-.04.2z" />
		</svg>
	)
}
export default ArrowTrendingDownIcon
