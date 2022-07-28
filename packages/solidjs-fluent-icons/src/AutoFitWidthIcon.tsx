import { splitProps, ComponentProps, JSX } from "solid-js"

function AutoFitWidthIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M18 4a.5.5 0 00-1 0v11a.5.5 0 001 0V4zM3 4a.5.5 0 00-1 0v11a.5.5 0 001 0V4zm11.85 5.15c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L13.29 10H6.71l1.14 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 11.7.7L6.71 9h6.58l-1.14-1.15a.5.5 0 01.7-.7l2 2z" />
		</svg>
	)
}
export default AutoFitWidthIcon
