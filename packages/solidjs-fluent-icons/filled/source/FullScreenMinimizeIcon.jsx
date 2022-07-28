import { splitProps } from "solid-js"
function FullScreenMinimizeIcon(props) {
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
			<path d="M15 5.5a.5.5 0 01-.5-.5V2.75a.75.75 0 00-1.5 0V5c0 1.1.9 2 2 2h2.25a.75.75 0 000-1.5H15zM5.5 15a.5.5 0 00-.5-.5H2.75a.75.75 0 010-1.5H5a2 2 0 012 2v2.25a.75.75 0 01-1.5 0V15zm9 0c0-.28.22-.5.5-.5h2.25a.75.75 0 000-1.5H15a2 2 0 00-2 2v2.25a.75.75 0 001.5 0V15zm-9-10a.5.5 0 01-.5.5H2.75a.75.75 0 000 1.5H5a2 2 0 002-2V2.75a.75.75 0 00-1.5 0V5z" />
		</svg>
	)
}
export default FullScreenMinimizeIcon
