import { splitProps, ComponentProps, JSX } from "solid-js"

function GridKanbanIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 3a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm6 0H3v2h5V3zM2 9a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V9zm6 0H3v2h5V9zm-5 5a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1v-2a1 1 0 00-1-1H3zm0 1h5v2H3v-2zm8-12a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1h-5a1 1 0 01-1-1V3zm6 0h-5v2h5V3zm-5 5a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1h-5zm0 1h5v2h-5V9z" />
		</svg>
	)
}
export default GridKanbanIcon
