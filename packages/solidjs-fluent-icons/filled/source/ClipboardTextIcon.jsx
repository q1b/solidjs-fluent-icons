import { splitProps } from "solid-js"
function ClipboardTextIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
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
			<path d="M21.83 4h1.67A3.5 3.5 0 0127 7.5v19a3.5 3.5 0 01-3.5 3.5h-15A3.5 3.5 0 015 26.5v-19A3.5 3.5 0 018.5 4h1.67A3 3 0 0113 2h6a3 3 0 012.83 2zM19 4h-6a1 1 0 100 2h6a1 1 0 100-2zm-8 8a1 1 0 100 2h10a1 1 0 100-2H11zm-1 6a1 1 0 001 1h5a1 1 0 100-2h-5a1 1 0 00-1 1zm1 4a1 1 0 100 2h8a1 1 0 100-2h-8z" />
		</svg>
	)
}
export default ClipboardTextIcon
