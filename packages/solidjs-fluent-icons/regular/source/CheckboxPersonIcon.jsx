import { splitProps } from "solid-js"
function CheckboxPersonIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h5.04a3.3 3.3 0 01.01-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v3.04c.36.06.7.19 1 .36V6a3 3 0 00-3-3H6zm7.85 4.85a.5.5 0 00-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default CheckboxPersonIcon
