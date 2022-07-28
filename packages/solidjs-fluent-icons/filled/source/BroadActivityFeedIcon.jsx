import { splitProps } from "solid-js"
function BroadActivityFeedIcon(props) {
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
			<path d="M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-13zm0 9c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4zm9 0c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4z" />
		</svg>
	)
}
export default BroadActivityFeedIcon
