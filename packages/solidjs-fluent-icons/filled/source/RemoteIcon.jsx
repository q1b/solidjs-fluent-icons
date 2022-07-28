import { splitProps } from "solid-js"
function RemoteIcon(props) {
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
			<path d="M16.97 15.03a.75.75 0 101.06-1.06L12.56 8.5l5.47-5.47a.75.75 0 00-1.06-1.06l-6 6c-.3.3-.3.77 0 1.06l6 6zM3.03 4.97a.75.75 0 00-1.06 1.06l5.47 5.47-5.47 5.47a.75.75 0 101.06 1.06l6-6c.3-.3.3-.77 0-1.06l-6-6z" />
		</svg>
	)
}
export default RemoteIcon
