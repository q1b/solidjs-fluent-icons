import { splitProps } from "solid-js"
function GestureIcon(props) {
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
			<path d="M5.01 4.4A.5.5 0 015.5 4h9a.5.5 0 010 1H7.8l8.9 4.04a.5.5 0 01.04.9l-11 5.92a.5.5 0 11-.48-.88l10.12-5.44L5.29 4.96a.5.5 0 01-.28-.57zM17 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM3.5 17a.5.5 0 100-1 .5.5 0 000 1z" />
		</svg>
	)
}
export default GestureIcon
