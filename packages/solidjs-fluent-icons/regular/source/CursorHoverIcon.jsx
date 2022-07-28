import { splitProps } from "solid-js"
function CursorHoverIcon(props) {
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
			<path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v7a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0017 13V6a1 1 0 00-1-1H4a1 1 0 00-1 1v7a1 1 0 001 1h5v1H4a2 2 0 01-2-2V6zm8.85 4.15a.5.5 0 00-.85.35v7a.5.5 0 00.91.29l1.57-2.25 2.94.45a.5.5 0 00.43-.84l-5-5zM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 00-.49.2l-.84 1.2z" />
		</svg>
	)
}
export default CursorHoverIcon
