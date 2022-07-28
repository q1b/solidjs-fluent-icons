import { splitProps, ComponentProps, JSX } from "solid-js"

function RhombusIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.89 4.3A2 2 0 016.76 3H17a2 2 0 011.87 2.7l-3.76 10a2 2 0 01-1.87 1.3H3a2 2 0 01-1.87-2.7l3.76-10zM6.76 4a1 1 0 00-.93.65l-3.76 10A1 1 0 003 16h10.24a1 1 0 00.93-.65l3.76-10A1 1 0 0017 4H6.76z" />
		</svg>
	)
}
export default RhombusIcon
