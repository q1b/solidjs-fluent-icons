import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowTurnBidirectionalDownRightIcon(
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
			<path d="M13.85 2.15a.5.5 0 00-.7.7L16.29 6H9a3 3 0 00-3 3v7.3l-3.15-3.15a.5.5 0 00-.7.7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 00-.7-.7L7 16.29V9c0-1.1.9-2 2-2h7.3l-3.15 3.15a.5.5 0 00.7.7l4-4a.5.5 0 000-.7l-4-4z" />
		</svg>
	)
}
export default ArrowTurnBidirectionalDownRightIcon
