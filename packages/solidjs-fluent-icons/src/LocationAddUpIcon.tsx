import { splitProps, ComponentProps, JSX } from "solid-js"

function LocationAddUpIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.95 4.05a7 7 0 010 9.9l-1.13 1.12-2.43 2.37a2 2 0 01-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 019.9-9.9zm-.7.7a6 6 0 00-8.67 8.32l.17.18.58.57 2.98 2.9.09.08a1 1 0 001.2 0l.1-.08 2.22-2.17 1.32-1.3.18-.18a6 6 0 00-.18-8.31zm-2.1 3.6a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 10.7.7L9.5 6.71v4.79a.5.5 0 001 0V6.7l1.65 1.65z" />
		</svg>
	)
}
export default LocationAddUpIcon
