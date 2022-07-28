import { splitProps } from "solid-js"
function DoorIcon(props) {
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
			<path d="M4.5 4c0-.83.67-1.5 1.5-1.5h8.15A1.5 1.5 0 0115.5 4v12c0 .83-.67 1.5-1.5 1.5H6A1.5 1.5 0 014.5 16V4zM7 11a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default DoorIcon
