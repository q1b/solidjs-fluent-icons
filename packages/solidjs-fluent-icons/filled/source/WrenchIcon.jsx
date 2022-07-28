import { splitProps } from "solid-js"
function WrenchIcon(props) {
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
			<path d="M13.5 2a4.5 4.5 0 00-4.42 5.36l-6.42 6.66a2.36 2.36 0 003.37 3.3l6.37-6.46a4.51 4.51 0 005.49-5.37.5.5 0 00-.84-.24L14.5 7.79 12.2 5.5l2.55-2.55a.5.5 0 00-.24-.84A4.51 4.51 0 0013.5 2z" />
		</svg>
	)
}
export default WrenchIcon
