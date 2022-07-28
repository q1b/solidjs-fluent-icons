import { splitProps, ComponentProps, JSX } from "solid-js"

function IosChevronRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12.65 5.85a.5.5 0 01.7-.7l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 01-.7-.7L16.79 10l-4.14-4.15z" />
		</svg>
	)
}
export default IosChevronRightIcon
