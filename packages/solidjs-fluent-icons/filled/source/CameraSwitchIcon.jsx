import { splitProps } from "solid-js"
function CameraSwitchIcon(props) {
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
			<path d="M14.15 2.15c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L15.29 5H4a1 1 0 00-1 1v6.5a.5.5 0 01-1 0V6c0-1.1.9-2 2-2h11.3l-1.15-1.15a.5.5 0 010-.7zM17 14a1 1 0 01-1 1H4.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L4.71 16H16a2 2 0 002-2V7.5a.5.5 0 00-1 0V14zm-4-4a3 3 0 11-6 0 3 3 0 016 0z" />
		</svg>
	)
}
export default CameraSwitchIcon
