import { splitProps } from "solid-js"
function ZoomFitIcon(props) {
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
			<path d="M3.86 7.85a.5.5 0 10-.72-.7L1.4 8.95a1.5 1.5 0 000 2.09l1.74 1.8a.5.5 0 10.72-.69l-1.74-1.8a.5.5 0 010-.7l1.74-1.8zm3.3-4.71a.5.5 0 10.69.72l1.8-1.74a.5.5 0 01.7 0l1.8 1.74a.5.5 0 00.7-.72l-1.8-1.74a1.5 1.5 0 00-2.1 0l-1.8 1.74zm9.7 4.01a.5.5 0 00-.72.7l1.75 1.8c.18.2.18.5 0 .7l-1.75 1.8a.5.5 0 10.72.7l1.74-1.8a1.5 1.5 0 000-2.09l-1.74-1.8zm-9.01 8.99a.5.5 0 00-.7.72l1.81 1.75c.59.56 1.5.55 2.09 0l1.8-1.75a.5.5 0 00-.7-.72l-1.8 1.74a.5.5 0 01-.7 0l-1.8-1.74zM6 8c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
		</svg>
	)
}
export default ZoomFitIcon
