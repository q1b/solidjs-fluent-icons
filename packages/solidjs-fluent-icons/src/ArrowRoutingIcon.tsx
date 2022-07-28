import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowRoutingIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.85 2.15a.5.5 0 00-.7.7L16.29 5H11.5A2.5 2.5 0 009 7.5v6c0 .83-.67 1.5-1.5 1.5h-.55a2.5 2.5 0 100 1h.55a2.5 2.5 0 002.5-2.5v-6c0-.83.67-1.5 1.5-1.5h4.8l-2.15 2.15a.5.5 0 00.7.7l3-3a.5.5 0 000-.7l-3-3zM6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		</svg>
	)
}
export default ArrowRoutingIcon
