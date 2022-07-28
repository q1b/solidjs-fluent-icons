import { splitProps, ComponentProps, JSX } from "solid-js"

function LineDashesIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16.85 3.85a.5.5 0 00-.7-.7l-1 1a.5.5 0 00.7.7l1-1zm-3 2.3c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l1-1c.2-.2.5-.2.7 0zm-3 3c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l1-1c.2-.2.5-.2.7 0zm-3 3c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l1-1c.2-.2.5-.2.7 0zm-3 3.7a.5.5 0 00-.7-.7l-1 1a.5.5 0 00.7.7l1-1z" />
		</svg>
	)
}
export default LineDashesIcon
