import { splitProps } from "solid-js"
function ServerPlayIcon(props) {
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
			<path d="M7.5 2A2.5 2.5 0 005 4.5v11A2.5 2.5 0 007.5 18h2.76a5.47 5.47 0 01-1.24-3H7.5a.5.5 0 010-1h1.52c.03-.34.1-.68.19-1H7.5a.5.5 0 010-1h2.1A5.5 5.5 0 0115 9.02V4.5A2.5 2.5 0 0012.5 2h-5zM7 5.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm12 9a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.29-.44l-2.97-1.65a.5.5 0 00-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 000-.88z" />
		</svg>
	)
}
export default ServerPlayIcon
