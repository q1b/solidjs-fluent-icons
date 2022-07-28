import { splitProps } from "solid-js"
function MusicNoteOff2Icon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L7 7.71v5.79a2.5 2.5 0 101 2V8.7l3.41 3.42a2.5 2.5 0 003.46 3.46l2.28 2.27a.5.5 0 00.7-.7l-15-15zM13.5 11c-.12 0-.24 0-.35.02l2.83 2.83.02-.35V3.18l-.01-.16a1 1 0 00-1.29-.8l-7 2.2a1 1 0 00-.61.54l2.8 2.82L15 6.18v5.32c-.42-.31-.94-.5-1.5-.5z" />
		</svg>
	)
}
export default MusicNoteOff2Icon
