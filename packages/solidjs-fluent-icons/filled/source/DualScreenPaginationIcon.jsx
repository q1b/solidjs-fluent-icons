import { splitProps } from "solid-js"
function DualScreenPaginationIcon(props) {
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
			<path d="M16 16h-5.5V4H16a2 2 0 012 2v8a2 2 0 01-2 2zM4 4h5.5v12H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8.5 10a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1z" />
		</svg>
	)
}
export default DualScreenPaginationIcon
