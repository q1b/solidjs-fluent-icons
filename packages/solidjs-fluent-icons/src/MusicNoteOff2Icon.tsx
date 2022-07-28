import { splitProps, ComponentProps, JSX } from "solid-js"

function MusicNoteOff2Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L7 7.71v5.79a2.5 2.5 0 101 2V8.7l3.41 3.42a2.5 2.5 0 003.46 3.46l2.28 2.27a.5.5 0 00.7-.7l-15-15zm11.3 12.7a1.5 1.5 0 01-2-2l2 2zM5.5 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8-3c-.12 0-.24 0-.35.02l2.83 2.83.02-.35V3.18a1 1 0 00-1.3-.95l-7 2.18a1 1 0 00-.61.55l.91.92v-.51l7-2.19v1.95L9.1 6.98l.8.8 5.1-1.6v5.32c-.42-.31-.94-.5-1.5-.5z" />
		</svg>
	)
}
export default MusicNoteOff2Icon
