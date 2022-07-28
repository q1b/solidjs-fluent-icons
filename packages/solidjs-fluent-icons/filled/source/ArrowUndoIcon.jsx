import { splitProps } from "solid-js"
function ArrowUndoIcon(props) {
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
			<path d="M6.86 6.5h2.39a.75.75 0 010 1.5h-4.4A.85.85 0 014 7.15v-4.4a.75.75 0 011.5 0V5.7l3.06-2.66a5.25 5.25 0 016.89 7.92l-8.17 7.1a.75.75 0 11-.99-1.13l8.17-7.1a3.75 3.75 0 10-4.92-5.66L6.86 6.5z" />
		</svg>
	)
}
export default ArrowUndoIcon
