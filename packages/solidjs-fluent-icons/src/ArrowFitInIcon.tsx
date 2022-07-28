import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowFitInIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.65 7.35a.5.5 0 11.7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7-.7L7.29 10H2.5a.5.5 0 010-1h4.8L5.64 7.35zm8.7 0a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L12.71 10h4.79a.5.5 0 000-1h-4.8l1.65-1.65z" />
		</svg>
	)
}
export default ArrowFitInIcon
