import { splitProps } from "solid-js"
function LocationAddRightIcon(props) {
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
			<path d="M14.95 13.96a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zm-4.8-7.6a.5.5 0 01.7-.71l2.5 2.5a.5.5 0 010 .7l-2.5 2.5a.5.5 0 01-.7-.7L11.79 9H7a.5.5 0 010-1h4.8l-1.65-1.65z" />
		</svg>
	)
}
export default LocationAddRightIcon
