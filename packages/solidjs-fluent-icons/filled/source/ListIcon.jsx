import { splitProps } from "solid-js"
function ListIcon(props) {
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
			<path d="M12.26 15.02a.75.75 0 01.1 1.49H2.83a.75.75 0 01-.1-1.49h9.53zm5.02-5.52a.75.75 0 01.1 1.49H2.83a.75.75 0 01-.1-1.49H17.27zm-4.02-6.05a.75.75 0 01.1 1.5H2.83a.75.75 0 01-.1-1.5h10.53z" />
		</svg>
	)
}
export default ListIcon
