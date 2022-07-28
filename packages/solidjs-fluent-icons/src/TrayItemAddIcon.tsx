import { splitProps, ComponentProps, JSX } from "solid-js"

function TrayItemAddIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11 3a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1h-3a1 1 0 01-1-1V3zm4 0h-3v2h3V3zm-1.5 4c.28 0 .5.22.5.5v5.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L13 13.29V7.5c0-.28.22-.5.5-.5zM4 12a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm4 0H5v2h3v-2zm-5.5 1c.28 0 .5.22.5.5V15a1 1 0 001 1h12a1 1 0 001-1v-1.5a.5.5 0 011 0V15a2 2 0 01-2 2H4a2 2 0 01-2-2v-1.5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default TrayItemAddIcon
