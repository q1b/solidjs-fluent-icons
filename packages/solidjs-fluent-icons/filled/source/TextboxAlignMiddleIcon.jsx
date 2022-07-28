import { splitProps } from "solid-js"
function TextboxAlignMiddleIcon(props) {
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
			<path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zM6 8.25c0 .41.32.75.7.75h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75zm.7 2.25c-.38 0-.7.34-.7.75s.32.75.7.75h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7z" />
		</svg>
	)
}
export default TextboxAlignMiddleIcon
