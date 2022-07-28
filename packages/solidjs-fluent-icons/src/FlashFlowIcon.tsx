import { splitProps, ComponentProps, JSX } from "solid-js"

function FlashFlowIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1.01 1.4L12.2 7h2.56c.95 0 1.4 1.14.77 1.81L14 10.38a2.5 2.5 0 00-.63-.79l1.44-1.46a.06.06 0 00.01-.03v-.05a.08.08 0 00-.03-.03L14.77 8H11.5a.5.5 0 01-.47-.67l1.5-4.25a.06.06 0 00-.07-.08H7.21a.06.06 0 00-.06.05L4.9 10.92c0 .04.02.08.06.08h1.21a3 3 0 001 1.38l-1.14 4.54v.04l.03.03.04.01h.01l.03-.02 4.2-4.3c.34-.17.65-.4.9-.68h.18l.25.76-4.81 4.91c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77zm12.52 12.25A2.01 2.01 0 0117 16a2 2 0 01-2-2h-.78a1.5 1.5 0 01-1.41-1l-.01-.03-.55-1.63a.5.5 0 00-.47-.34h-1.05a2 2 0 11.27-1h.78c.64 0 1.22.41 1.42 1.03l.55 1.63c.06.2.26.34.47.34h1.05a2 2 0 113.45 2.02zM17 15a1 1 0 001-1v-.01-.04a1 1 0 00-2 .05v.02a1 1 0 001 .98zm-8-4a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default FlashFlowIcon
