import { splitProps, ComponentProps, JSX } from "solid-js"

function SpacebarIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.5 8c.28 0 .5.22.5.5v2c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 10.5v-2c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default SpacebarIcon
