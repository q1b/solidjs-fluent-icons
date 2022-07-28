import { splitProps } from "solid-js"
function PersonBoardIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3H6zm4.75 3.25a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zm1.75 4c0 .59-.15 2.5-3.5 2.5-3.36 0-3.5-1.93-3.5-2.5a1 1 0 011-1h5a1 1 0 011 1zM5.76 16A3 3 0 008 17h4.5a4.5 4.5 0 004.5-4.5V8a3 3 0 00-1-2.24v6.74a3.5 3.5 0 01-3.5 3.5H5.76z" />
		</svg>
	)
}
export default PersonBoardIcon
