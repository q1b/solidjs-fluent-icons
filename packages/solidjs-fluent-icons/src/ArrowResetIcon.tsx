import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowResetIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.85 2.65c.2.2.2.5 0 .7L4.21 5H11a6 6 0 11-6 6 .5.5 0 011 0 5 5 0 105-5H4.2l1.65 1.65a.5.5 0 11-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default ArrowResetIcon
