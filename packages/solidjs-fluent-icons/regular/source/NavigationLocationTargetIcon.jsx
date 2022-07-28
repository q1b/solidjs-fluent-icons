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
			<path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 5a.5.5 0 000 1h10.2c.4-.32.84-.56 1.32-.73.01-.1.04-.18.07-.27H2.5zm7.86 5.48a1.5 1.5 0 01-.27-.48H2.5a.5.5 0 000 1h8.77v-.02a1.5 1.5 0 01-.91-.5zm5.14.02a1 1 0 100-2 1 1 0 000 2zm4-1.5h-.55A3.49 3.49 0 0016 11.05v-.55a.5.5 0 00-1 0v.55A3.49 3.49 0 0012.05 14h-.55a.5.5 0 000 1h.55A3.49 3.49 0 0015 17.95v.55a.5.5 0 001 0v-.55A3.49 3.49 0 0018.95 15h.55a.5.5 0 000-1zm-2.23 2.27a2.5 2.5 0 11-3.54-3.54 2.5 2.5 0 013.54 3.54z" />
		</svg>
	)
}
export default NavigationLocationTargetIcon
