import { splitProps, ComponentProps, JSX } from "solid-js"

function TriangleLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M15.54 17.88A1 1 0 0017 17V3a1 1 0 00-1.46-.88l-13.02 7a1 1 0 000 1.76l13.02 7zM18 17a2 2 0 01-2.93 1.76l-13.02-7a2 2 0 010-3.52l13.02-7A2 2 0 0118 3.01V17z" />
		</svg>
	)
}
export default TriangleLeftIcon
