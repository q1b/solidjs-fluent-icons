import { splitProps, ComponentProps, JSX } from "solid-js"

function TemperatureIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 6.5c.28 0 .5.22.5.5v5.06a2 2 0 11-1 0V7c0-.28.22-.5.5-.5zM10 2a3 3 0 00-3 3v6.35A3.99 3.99 0 0010 18a4 4 0 003-6.65V5a3 3 0 00-3-3zm0 1a2 2 0 012 2v6.75l.14.15a3 3 0 11-4.29 0l.15-.15V5c0-1.1.9-2 2-2z" />
		</svg>
	)
}
export default TemperatureIcon
