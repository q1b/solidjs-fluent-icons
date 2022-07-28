import { splitProps } from "solid-js"
function HomeCheckmarkIcon(props) {
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
			<path d="M9 2.38a1.5 1.5 0 012 0l5.5 4.95c.32.28.5.69.5 1.11v7.06c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 15.5V8.44c0-.42.18-.83.5-1.11L9 2.38zm4.35 6.47a.5.5 0 00-.7-.7L9 11.78l-1.65-1.65a.5.5 0 10-.7.71l2 2c.2.2.5.2.7 0l4-4z" />
		</svg>
	)
}
export default HomeCheckmarkIcon
