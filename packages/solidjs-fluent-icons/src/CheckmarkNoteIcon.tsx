import { splitProps, ComponentProps, JSX } from "solid-js"

function CheckmarkNoteIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M1.67 9.13a.5.5 0 01.7.04l3.65 4.1L16.15 3.15a.5.5 0 11.7.7l-10.5 10.5a.5.5 0 01-.72-.02l-4-4.5a.5.5 0 01.04-.7zM11 13c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-4zm6.5 3h-4a.5.5 0 100 1h4a.5.5 0 100-1zm-4-3a.5.5 0 100 1h4a.5.5 0 100-1h-4z" />
		</svg>
	)
}
export default CheckmarkNoteIcon
