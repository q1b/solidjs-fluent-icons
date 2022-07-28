import { splitProps } from "solid-js"
function FStopIcon(props) {
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
			<path d="M11.08 5.68c.28-1.63 2-2.58 3.53-1.95l.36.14a.75.75 0 10.56-1.38l-.36-.15A4.08 4.08 0 009.6 5.43L9 9H5.74a.75.75 0 000 1.5h2.98l-.5 2.96a2.58 2.58 0 01-3.92 1.75l-.16-.1a.75.75 0 00-.8 1.27l.16.1c2.46 1.55 5.7.1 6.2-2.77l.55-3.21h2.99a.75.75 0 100-1.5h-2.74l.57-3.32z" />
		</svg>
	)
}
export default FStopIcon
