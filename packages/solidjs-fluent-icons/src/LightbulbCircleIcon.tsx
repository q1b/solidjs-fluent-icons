import { splitProps, ComponentProps, JSX } from "solid-js"

function LightbulbCircleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0zm8-4a2.75 2.75 0 00-1.69 4.92c.2.15.35.37.4.63l.08.45h2.42l.08-.45c.05-.26.2-.48.4-.63A2.74 2.74 0 0010 6zm1.02 7H8.98l.1.6c.05.23.26.4.5.4h.84a.5.5 0 00.5-.4l.1-.6zM6.25 8.75a3.75 3.75 0 116.03 2.98l-.39 2.05A1.5 1.5 0 0110.42 15h-.84a1.5 1.5 0 01-1.47-1.22l-.39-2.04c0-.01 0-.02-.02-.03a3.74 3.74 0 01-1.45-2.96z" />
		</svg>
	)
}
export default LightbulbCircleIcon
