import { splitProps, ComponentProps, JSX } from "solid-js"

function EqualCircleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.5 9a.5.5 0 000-1h-7a.5.5 0 000 1h7zm0 3a.5.5 0 000-1h-7a.5.5 0 000 1h7zm4.5-2a8 8 0 10-16 0 8 8 0 0016 0zm-8-7a7 7 0 110 14 7 7 0 010-14z" />
		</svg>
	)
}
export default EqualCircleIcon
