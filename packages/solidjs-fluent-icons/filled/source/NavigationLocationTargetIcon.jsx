import { splitProps } from "solid-js"
function NavigationLocationTargetIcon(props) {
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
			<path d="M2.75 5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2 10.75c0-.41.34-.75.75-.75h11.34a1.5 1.5 0 00-.07.27 4.47 4.47 0 00-1.85 1.23H2.75a.75.75 0 01-.75-.75zM2.75 15h7.34a1.5 1.5 0 001.18.98c.06.18.13.35.22.52H2.75a.75.75 0 010-1.5zm13.3.33a1 1 0 11-1.1-1.66 1 1 0 011.1 1.66zm2.9-1.33h.55a.5.5 0 010 1h-.55A3.49 3.49 0 0116 17.95v.55a.5.5 0 01-1 0v-.55A3.49 3.49 0 0112.05 15h-.55a.5.5 0 010-1h.55A3.49 3.49 0 0115 11.05v-.55a.5.5 0 011 0v.55A3.49 3.49 0 0118.95 14zm-3.2 2.99a2.5 2.5 0 10-.5-4.98 2.5 2.5 0 00.5 4.98z" />
		</svg>
	)
}
export default NavigationLocationTargetIcon
