import { splitProps, ComponentProps, JSX } from "solid-js"

function CaretDownIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.02 8.63A1 1 0 015.8 7h8.4a1 1 0 01.78 1.63l-3.81 4.72a1.5 1.5 0 01-2.34 0L5.02 8.63zM14.2 8H5.8l3.81 4.72c.2.25.58.25.78 0L14.2 8z" />
		</svg>
	)
}
export default CaretDownIcon
