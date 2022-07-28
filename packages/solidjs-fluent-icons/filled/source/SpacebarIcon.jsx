import { splitProps } from "solid-js"
function SpacebarIcon(props) {
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
			<path d="M2.75 7.75c.41 0 .75.34.75.75v2h13v-2a.75.75 0 011.5 0v2c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 10.5v-2c0-.41.34-.75.75-.75z" />
		</svg>
	)
}
export default SpacebarIcon
