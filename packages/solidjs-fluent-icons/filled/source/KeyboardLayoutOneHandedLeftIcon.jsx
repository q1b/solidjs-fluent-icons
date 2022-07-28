import { splitProps } from "solid-js"
function KeyboardLayoutOneHandedLeftIcon(props) {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v8c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-13zm2 8h3a.5.5 0 010 1h-3a.5.5 0 010-1zm0-4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.75 8a.75.75 0 110-1.5.75.75 0 010 1.5zM6 9.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
		</svg>
	)
}
export default KeyboardLayoutOneHandedLeftIcon
