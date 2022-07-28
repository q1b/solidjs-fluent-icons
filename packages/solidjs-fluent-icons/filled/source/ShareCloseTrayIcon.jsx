import { splitProps } from "solid-js"
function ShareCloseTrayIcon(props) {
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
			<path d="M4 16a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4zm6-10a.5.5 0 00-.5.5v5.8l-1.65-1.65a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7l-1.65 1.64V6.5A.5.5 0 0010 6z" />
		</svg>
	)
}
export default ShareCloseTrayIcon
