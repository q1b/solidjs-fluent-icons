import { splitProps } from "solid-js"
function TagOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L5.79 6.5 3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 002.83 0l2.76-2.76 3.59 3.58a.5.5 0 00.7-.7l-15-15zm14.58 8.25l-2.45 2.45L7.2 5.08l2.5-2.5A2 2 0 0111.13 2l4.89.04a2 2 0 011.99 2v4.94a2 2 0 01-.58 1.42zM14 7a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default TagOffIcon
