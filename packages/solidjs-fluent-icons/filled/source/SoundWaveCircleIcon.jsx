import { splitProps } from "solid-js"
function SoundWaveCircleIcon(props) {
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
			<path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm7-2.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM6 8a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2A.5.5 0 006 8zm5 0a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2A.5.5 0 0011 8zm2.5-1a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z" />
		</svg>
	)
}
export default SoundWaveCircleIcon
