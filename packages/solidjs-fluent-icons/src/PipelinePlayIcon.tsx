import { splitProps, ComponentProps, JSX } from "solid-js"

function PipelinePlayIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 5.5a1.5 1.5 0 113 0V6h10v-.5a1.5 1.5 0 013 0v4.76a5.5 5.5 0 00-1-.66V5.5a.5.5 0 00-1 0v3.7c-.32-.08-.66-.15-1-.18V7H5v6h4.2c-.08.32-.15.66-.18 1H5v.5a1.5 1.5 0 01-3 0v-9zm2 0a.5.5 0 00-1 0v9a.5.5 0 001 0v-9zm15 9a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.29-.44l-2.97-1.65a.5.5 0 00-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 000-.88z" />
		</svg>
	)
}
export default PipelinePlayIcon
