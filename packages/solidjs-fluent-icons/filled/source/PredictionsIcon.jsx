import { splitProps } from "solid-js"
function PredictionsIcon(props) {
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
			<path d="M14.5 1c.28 0 .5.22.5.5 0 .46.07 1.22.47 1.84.38.6 1.08 1.14 2.53 1.14a.5.5 0 110 1 3.5 3.5 0 00-1.82.73A2.77 2.77 0 0015 8.45a.5.5 0 01-.5.5.5.5 0 01-.5-.5c0-.5-.16-1.26-.6-1.88-.44-.6-1.16-1.1-2.4-1.1a.5.5 0 01-.5-.5c0-.27.22-.5.5-.5.51 0 1.25 0 1.87-.36.57-.33 1.13-1 1.13-2.61 0-.28.22-.5.5-.5zM6.15 12.17l-.94 3.4c-.17.61.08 1.34.74 1.63 1.64.73 4.65 1.35 7.97.01a1.43 1.43 0 00.82-1.75l-.98-3.23a6.5 6.5 0 01-7.61-.06zm6.77-9.84c-.04.22-.1.38-.16.5a.97.97 0 01-.4.42c-.34.2-.82.23-1.36.23a1.5 1.5 0 100 2.98c.91 0 1.34.35 1.58.7.3.4.42.95.42 1.3a1.5 1.5 0 001.61 1.48A5.5 5.5 0 014.5 6.96a5.48 5.48 0 018.42-4.63z" />
		</svg>
	)
}
export default PredictionsIcon
