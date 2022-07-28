import { splitProps } from "solid-js"
function MatchAppLayoutIcon(props) {
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
			<path d="M3.5 7C2.67 7 2 7.67 2 8.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3C9 7.67 8.33 7 7.5 7h-4zM3 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3zM12.5 7c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4zM12 8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3z" />
		</svg>
	)
}
export default MatchAppLayoutIcon
