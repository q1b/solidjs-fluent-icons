import { splitProps } from "solid-js"
function PipelinePlayIcon(props) {
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
			<path d="M2 5.5a1.5 1.5 0 013 0v9a1.5 1.5 0 01-3 0v-9zm12 3.52A5.5 5.5 0 009.02 14H6V6h8v3.02zm1-3.52v3.52c1.13.1 2.17.55 3 1.24V5.5a1.5 1.5 0 00-3 0zm4 9a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.29-.44l-2.97-1.65a.5.5 0 00-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 000-.88z" />
		</svg>
	)
}
export default PipelinePlayIcon
