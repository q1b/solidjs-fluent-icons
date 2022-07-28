import { splitProps } from "solid-js"
function FlashlightOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l15 15a.5.5 0 00.7-.7l-15-15zM16.8 11.4l-1.08 1.09L7.5 4.3l1.09-1.1a2 2 0 012.82 0L16.8 8.6a2 2 0 010 2.82zM6.8 9L11 13.2l-4.09 4.1a2 2 0 01-2.82 0L2.7 15.9a2 2 0 010-2.82L6.79 9zm.06 4.85l1-1a.5.5 0 10-.7-.7l-1 1a.5.5 0 10.7.7z" />
		</svg>
	)
}
export default FlashlightOffIcon
