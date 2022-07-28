import { splitProps, ComponentProps, JSX } from "solid-js"

function ColorFillAccentIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.84 12.5H4c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5v-2c0-.3-.09-.57-.23-.8a2.67 2.67 0 01-2.52 1.8c-1.6 0-2.51-1.27-2.7-2.5h-1.07l-.95.95a3 3 0 01-4.24 0l-.95-.95z" />
		</svg>
	)
}
export default ColorFillAccentIcon
