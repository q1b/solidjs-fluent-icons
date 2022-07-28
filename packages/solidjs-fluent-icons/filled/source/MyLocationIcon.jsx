import { splitProps } from "solid-js"
function MyLocationIcon(props) {
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
			<path d="M10 13a3 3 0 100-6 3 3 0 000 6zm.75-10.25a.75.75 0 00-1.5 0v1.3a6 6 0 00-5.2 5.2h-1.3a.75.75 0 000 1.5h1.3a6 6 0 005.2 5.2v1.3a.75.75 0 001.5 0v-1.3a6 6 0 005.2-5.2h1.3a.75.75 0 000-1.5h-1.3a6 6 0 00-5.2-5.2v-1.3zM10 14.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
		</svg>
	)
}
export default MyLocationIcon
