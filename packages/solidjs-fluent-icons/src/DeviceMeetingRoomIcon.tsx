import { splitProps, ComponentProps, JSX } from "solid-js"

function DeviceMeetingRoomIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.1 3a2.5 2.5 0 00-2.44 1.95l-1.6 7A2.5 2.5 0 004.52 15h10.98a2.5 2.5 0 002.44-3.05l-1.59-7A2.5 2.5 0 0013.9 3H6.1zM4.63 5.17A1.5 1.5 0 016.1 4h7.8c.7 0 1.31.48 1.47 1.17l1.59 7A1.5 1.5 0 0115.49 14H4.51a1.5 1.5 0 01-1.47-1.83l1.6-7zM5.5 16a.5.5 0 000 1h9a.5.5 0 000-1h-9z" />
		</svg>
	)
}
export default DeviceMeetingRoomIcon
