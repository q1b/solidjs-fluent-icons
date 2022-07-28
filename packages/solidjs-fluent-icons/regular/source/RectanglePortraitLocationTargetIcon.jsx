import { splitProps } from "solid-js"
function RectanglePortraitLocationTargetIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v6.27h-.02A1.5 1.5 0 0015 9.09V4a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h4.78a4.5 4.5 0 00.92 1H6a2 2 0 01-2-2V4zm11.06 11.33a1 1 0 11-1.12-1.66 1 1 0 011.12 1.66zM17.95 14h.55a.5.5 0 010 1h-.55A3.49 3.49 0 0115 17.95v.55a.5.5 0 01-1 0v-.55A3.49 3.49 0 0111.05 15h-.55a.5.5 0 010-1h.55A3.49 3.49 0 0114 11.05v-.55a.5.5 0 011 0v.55A3.49 3.49 0 0117.95 14zm-3.2 2.99a2.5 2.5 0 10-.5-4.98 2.5 2.5 0 00.5 4.98z" />
		</svg>
	)
}
export default RectanglePortraitLocationTargetIcon
