import { splitProps } from "solid-js"
function TextboxAlignTopIcon(props) {
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
			<path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM6.7 6h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75S6.32 6 6.7 6zm0 3h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75S6.32 9 6.7 9z" />
		</svg>
	)
}
export default TextboxAlignTopIcon
