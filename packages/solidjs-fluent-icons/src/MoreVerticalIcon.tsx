import { splitProps, ComponentProps, JSX } from "solid-js"

function MoreVerticalIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6zm0 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.25 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z" />
		</svg>
	)
}
export default MoreVerticalIcon
