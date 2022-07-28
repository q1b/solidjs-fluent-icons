import { splitProps, ComponentProps, JSX } from "solid-js"

function BeakerOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l5.1 5.1v.8c0 .4-.1.81-.3 1.18l-2.6 4.86A1.5 1.5 0 005.67 17h8.66c.55 0 1-.29 1.27-.7l1.55 1.55a.5.5 0 00.7-.7l-15-15zm11.98 13.39a.5.5 0 01-.5.46H5.67a.5.5 0 01-.44-.74L6.7 12.5h5.08l3.04 3.04zm-4.04-4.04H7.25l.59-1.1c.24-.45.37-.94.4-1.45l2.55 2.55zm.96-2.75c0 .35.05.7.16 1.04l2.29 2.29-1.15-2.15a2.5 2.5 0 01-.3-1.18V4h.75a.5.5 0 000-1h-7a.5.5 0 000 1h.75v1.13l1 1V4h3.5v4.75z" />
		</svg>
	)
}
export default BeakerOffIcon
