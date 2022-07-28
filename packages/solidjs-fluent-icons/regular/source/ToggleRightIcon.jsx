import { splitProps } from "solid-js"
function ToggleRightIcon(props) {
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
			<path d="M14 12a2 2 0 100-4 2 2 0 000 4zM2 10a4 4 0 014-4h8a4 4 0 010 8H6a4 4 0 01-4-4zm4-3a3 3 0 000 6h8a3 3 0 100-6H6z" />
		</svg>
	)
}
export default ToggleRightIcon
