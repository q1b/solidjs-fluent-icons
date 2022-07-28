import { splitProps } from "solid-js"
function DataBarHorizontalIcon(props) {
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
			<path d="M2 4c0-1.1.9-2 2-2h5a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 000 2h5a1 1 0 000-2H4zm-2 7c0-1.1.9-2 2-2h8a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 000 2h8a1 1 0 100-2H4zm-2 7c0-1.1.9-2 2-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 100 2h12a1 1 0 100-2H4z" />
		</svg>
	)
}
export default DataBarHorizontalIcon
