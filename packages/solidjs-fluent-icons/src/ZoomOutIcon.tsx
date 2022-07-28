import { splitProps, ComponentProps, JSX } from "solid-js"

function ZoomOutIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11 8a.5.5 0 010 1H6a.5.5 0 010-1h5zm3 .5a5.5 5.5 0 10-1.98 4.23l4.13 4.12.07.06a.5.5 0 00.63-.76l-4.12-4.13A5.48 5.48 0 0014 8.5zm-10 0a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
		</svg>
	)
}
export default ZoomOutIcon
