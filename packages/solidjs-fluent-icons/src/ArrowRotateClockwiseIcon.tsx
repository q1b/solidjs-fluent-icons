import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowRotateClockwiseIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M3 10a7 7 0 1110 6.33V14.5a.5.5 0 00-1 0v3c0 .28.22.5.5.5h3a.5.5 0 000-1h-1.62A8 8 0 102 10a.5.5 0 001 0zm7 2a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default ArrowRotateClockwiseIcon
