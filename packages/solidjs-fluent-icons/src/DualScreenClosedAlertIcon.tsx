import { splitProps, ComponentProps, JSX } from "solid-js"

function DualScreenClosedAlertIcon(
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
			<path d="M10.5 5a3 3 0 016 0v2l1.32 1.12a.5.5 0 01-.32.88h-8a.5.5 0 01-.32-.88L10.5 7V5zm3 6a1.5 1.5 0 01-1.42-1h2.83c-.2.58-.76 1-1.41 1zM6 6h3.5V5H6a1 1 0 00-1 1v10a1 1 0 001 1h6a2 2 0 002-2v-3.05a2.52 2.52 0 01-1 0V15a1 1 0 01-1 1H6V6z" />
		</svg>
	)
}
export default DualScreenClosedAlertIcon
