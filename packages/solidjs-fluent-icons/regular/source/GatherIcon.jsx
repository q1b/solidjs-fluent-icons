import { splitProps } from "solid-js"
function GatherIcon(props) {
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
			<path d="M6 15V5a2 2 0 00-2-2H2.5a.5.5 0 100 1H4a1 1 0 011 1v2H2.5a.5.5 0 100 1H5v4H2.5a.5.5 0 000 1H5v2a1 1 0 01-1 1H2.5a.5.5 0 000 1H4a2 2 0 002-2zm11.85-4.15a.5.5 0 01-.35.15H15v2a1 1 0 001 1h1.5a.5.5 0 010 1H16a2 2 0 01-2-2V8a2 2 0 012-2h1.5a.5.5 0 010 1H16a1 1 0 00-1 1v2h2.5a.5.5 0 01.35.85zM10 11.5a.5.5 0 01.15-.35l.64-.65H8a.5.5 0 010-1h2.8l-.65-.65a.5.5 0 11.7-.7l1.5 1.5a.5.5 0 010 .7l-1.5 1.5a.5.5 0 01-.85-.35z" />
		</svg>
	)
}
export default GatherIcon
