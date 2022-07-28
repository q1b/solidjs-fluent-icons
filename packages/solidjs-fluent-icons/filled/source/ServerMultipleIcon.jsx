import { splitProps } from "solid-js"
function ServerMultipleIcon(props) {
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
			<path d="M7.5 2A2.5 2.5 0 005 4.5v11A2.5 2.5 0 007.5 18h5a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0012.5 2h-5zm0 3h5a.5.5 0 010 1h-5a.5.5 0 010-1zM7 12.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM2 7c0-1.1.9-2 2-2v10.5c0 .17.01.34.04.5H4a2 2 0 01-2-2V7zm14 8.5c0 .17-.01.34-.04.5H16a2 2 0 002-2V7a2 2 0 00-2-2v10.5z" />
		</svg>
	)
}
export default ServerMultipleIcon
