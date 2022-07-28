import { splitProps, ComponentProps, JSX } from "solid-js"

function FilterIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 13h5a.5.5 0 01.09 1H7.5a.5.5 0 01-.09-1h5.09-5zm-2-4h9a.5.5 0 01.09 1H5.5a.5.5 0 01-.09-1h9.09-9zm-2-4h13a.5.5 0 01.09 1H3.5a.5.5 0 01-.09-1H16.5h-13z" />
		</svg>
	)
}
export default FilterIcon
