import { splitProps } from "solid-js"
function ArrowMaximizeVerticalIcon(props) {
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
			<path d="M9.58 1.33a.6.6 0 01.84 0l2.13 2.13a.6.6 0 01-.85.84l-1.1-1.1v4.3a.6.6 0 11-1.2 0V3.2L8.3 4.3a.6.6 0 01-.85-.84l2.13-2.13zM3.9 10c0-.33.27-.6.6-.6h11a.6.6 0 110 1.2h-11a.6.6 0 01-.6-.6zm6.7 6.8v-4.3a.6.6 0 00-1.2 0v4.3l-1.1-1.1a.6.6 0 00-.85.85l2.13 2.12a.6.6 0 00.84 0l2.13-2.12a.6.6 0 10-.85-.85l-1.1 1.1z" />
		</svg>
	)
}
export default ArrowMaximizeVerticalIcon
