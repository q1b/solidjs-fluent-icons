import { splitProps } from "solid-js"
function HomeIcon(props) {
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
			<path d="M11 2.39a1.5 1.5 0 00-2 0L3.5 7.33c-.32.28-.5.69-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-4c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v4c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V8.45c0-.43-.18-.84-.5-1.12L11 2.39z" />
		</svg>
	)
}
export default HomeIcon
