import { splitProps } from "solid-js"
function LaptopIcon(props) {
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
			<path d="M3 7c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm2-1a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H5zm-3 9.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default LaptopIcon
