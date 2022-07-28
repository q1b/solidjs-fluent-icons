import { splitProps, ComponentProps, JSX } from "solid-js"

function ShiftsOpenIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 5.5C4 4.67 4.67 4 5.5 4h2a.5.5 0 000-1h-2A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h2a.5.5 0 000-1h-2A1.5 1.5 0 014 14.5v-9zM12.5 3a.5.5 0 000 1h2c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 000 1h2a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-2zM10 5.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h4a.5.5 0 000-1H10V5.5z" />
		</svg>
	)
}
export default ShiftsOpenIcon
