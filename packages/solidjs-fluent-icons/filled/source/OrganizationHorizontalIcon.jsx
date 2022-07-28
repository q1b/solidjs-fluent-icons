import { splitProps } from "solid-js"
function OrganizationHorizontalIcon(props) {
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
			<path d="M5 13a3 3 0 112.96-3.5H9.5v-3c0-.83.67-1.5 1.5-1.5h1.04a3 3 0 110 1H11a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h1.04a3 3 0 110 1H11a1.5 1.5 0 01-1.5-1.5v-3H7.96A3 3 0 015 13z" />
		</svg>
	)
}
export default OrganizationHorizontalIcon
