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
			<path d="M4 4a2 2 0 00-2 2v7c0 1.1.9 2 2 2h5v-4.5a1.5 1.5 0 012.56-1.06l5 5c.11.11.2.24.28.38A2 2 0 0018 13V6a2 2 0 00-2-2H4zm6.85 6.15a.5.5 0 00-.85.35v7a.5.5 0 00.91.29l1.57-2.25 2.94.45a.5.5 0 00.43-.84l-5-5zM11 15.9v-4.2l3.07 3.06-1.74-.26a.5.5 0 00-.49.2l-.84 1.2z" />
		</svg>
	)
}
export default CursorHoverIcon
