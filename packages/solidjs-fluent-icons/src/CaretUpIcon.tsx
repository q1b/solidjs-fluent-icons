import { splitProps, ComponentProps, JSX } from "solid-js"

function CaretUpIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.02 12.28a1 1 0 00.78 1.63h8.4a1 1 0 00.78-1.63l-3.81-4.72a1.5 1.5 0 00-2.34 0l-3.81 4.72zm9.18.63H5.8L9.6 8.19a.5.5 0 01.78 0l3.81 4.72z" />
		</svg>
	)
}
export default CaretUpIcon
