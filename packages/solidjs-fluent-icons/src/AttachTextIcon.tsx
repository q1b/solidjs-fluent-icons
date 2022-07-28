import { splitProps, ComponentProps, JSX } from "solid-js"

function AttachTextIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 4A2.5 2.5 0 004 6.5V14a.5.5 0 01-1 0V6.5a3.5 3.5 0 117 0V15a2 2 0 01-4 0V6.5a.5.5 0 011 0V15a1 1 0 102 0V6.5A2.5 2.5 0 006.5 4zM12 5.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm-.5 3.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
		</svg>
	)
}
export default AttachTextIcon
