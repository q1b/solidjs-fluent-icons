import { splitProps, ComponentProps, JSX } from "solid-js"

function ProhibitedIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A7 7 0 0017 10zM4.7 14.58l9.88-9.87a7 7 0 00-9.87 9.87z" />
		</svg>
	)
}
export default ProhibitedIcon
