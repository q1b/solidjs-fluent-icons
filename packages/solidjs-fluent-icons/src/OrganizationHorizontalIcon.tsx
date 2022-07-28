import { splitProps, ComponentProps, JSX } from "solid-js"

function OrganizationHorizontalIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M2 10a3 3 0 005.96.5H9.5v3c0 .83.67 1.5 1.5 1.5h1.04a3 3 0 100-1H11a.5.5 0 01-.5-.5v-7c0-.28.22-.5.5-.5h1.04a3 3 0 100-1H11c-.83 0-1.5.67-1.5 1.5v3H7.96A3 3 0 002 10zm3 2a2 2 0 110-4 2 2 0 010 4zm10 4.5a2 2 0 110-4 2 2 0 010 4zm-2-11a2 2 0 114 0 2 2 0 01-4 0z" />
		</svg>
	)
}
export default OrganizationHorizontalIcon
