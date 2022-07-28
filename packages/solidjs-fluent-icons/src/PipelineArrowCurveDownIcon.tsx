import { splitProps, ComponentProps, JSX } from "solid-js"

function PipelineArrowCurveDownIcon(
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
			<path d="M10.98 6c-.03.34-.1.68-.18 1H15v6H5v-2.02c-.35-.03-.68-.1-1-.19v3.71a.5.5 0 01-1 0v-4.1c-.37-.19-.7-.4-1-.66v4.76a1.5 1.5 0 003 0V14h10v.5a1.5 1.5 0 003 0v-9a1.5 1.5 0 00-3 0V6h-4.02zm5.52-1c.28 0 .5.22.5.5v9a.5.5 0 01-1 0v-9c0-.28.22-.5.5-.5zm-11-4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm2.6 5.4c.2.2.2.5 0 .7L6.37 8.85a.5.5 0 01-.7 0L3.9 7.1a.5.5 0 11.7-.7l.9.9V5.74C5.5 4.78 4.72 4 3.75 4H3.5a.5.5 0 110-1h.25A2.75 2.75 0 016.5 5.75v1.54l.9-.9c.2-.19.51-.19.7 0z" />
		</svg>
	)
}
export default PipelineArrowCurveDownIcon
