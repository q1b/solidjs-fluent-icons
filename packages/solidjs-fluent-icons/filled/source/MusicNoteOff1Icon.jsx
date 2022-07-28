import { splitProps } from "solid-js"
function MusicNoteOff1Icon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l7.35 7.36v2.2A3.24 3.24 0 004 14.74a3.25 3.25 0 106.5-.25v-3.3l6.65 6.65a.5.5 0 00.7-.7l-15-15zm7.65 5.03v1.2l-1-1V2.5a.5.5 0 01.65-.48l5.09 1.57A2.5 2.5 0 0117 5.98V8.5a.5.5 0 01-.65.48l-5.85-1.8z" />
		</svg>
	)
}
export default MusicNoteOff1Icon
