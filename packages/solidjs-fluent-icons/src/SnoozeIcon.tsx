import { splitProps, ComponentProps, JSX } from "solid-js"

function SnoozeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.5 4a.5.5 0 000 1h4.03l-4.44 6.2a.5.5 0 00.41.8h5a.5.5 0 000-1h-4.03l4.44-6.2a.5.5 0 00-.41-.8h-5zm-6 6a.5.5 0 000 1h2.96l-3.35 4.19a.5.5 0 00.39.81h4a.5.5 0 000-1H5.54l3.35-4.19A.5.5 0 008.5 10h-4z" />
		</svg>
	)
}
export default SnoozeIcon
