import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowMoveInwardIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.15 16.35c.2.2.5.2.7 0l1.65-1.64v3.79a.5.5 0 001 0v-3.8l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 000 .7zm9.2-8.5a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7l-1.64-1.65h3.79a.5.5 0 000-1h-3.8l1.65-1.65zm-12.7 0a.5.5 0 11.7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7-.7l1.64-1.65H1.5a.5.5 0 010-1h3.8L3.64 7.85zm4.2-4.2a.5.5 0 10-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7L10.5 5.29V1.5a.5.5 0 00-1 0v3.8L7.85 3.64z" />
		</svg>
	)
}
export default ArrowMoveInwardIcon
