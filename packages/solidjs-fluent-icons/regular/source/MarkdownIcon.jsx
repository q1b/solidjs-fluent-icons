import { splitProps } from "solid-js"
function MarkdownIcon(props) {
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
			<path d="M16 4.5a.5.5 0 00-1 0v8.8l-1.15-1.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 00-.7-.7L16 13.29V4.5zM2.32 4.03a.5.5 0 01.55.14L7 8.75l4.13-4.58a.5.5 0 01.87.33v10a.5.5 0 11-1 0V5.8L7.37 9.83a.5.5 0 01-.74 0L3 5.8v8.7a.5.5 0 11-1 0v-10c0-.2.13-.4.32-.47z" />
		</svg>
	)
}
export default MarkdownIcon
