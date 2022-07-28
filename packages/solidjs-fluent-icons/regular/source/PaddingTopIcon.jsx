import { splitProps } from "solid-js"
function PaddingTopIcon(props) {
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
			<path d="M3.5 2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h2a.5.5 0 000-1h-2zm4 0a.5.5 0 000 1h2a.5.5 0 000-1h-2zm4 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9.85 4.15a.5.5 0 00-.7 0l-4.5 4.5a.5.5 0 10.7.7L9 5.71v9.79a.5.5 0 001 0V5.7l3.65 3.65a.5.5 0 00.7-.7l-4.5-4.5zM3.5 17a.5.5 0 000 1h12a.5.5 0 000-1h-12z" />
		</svg>
	)
}
export default PaddingTopIcon
