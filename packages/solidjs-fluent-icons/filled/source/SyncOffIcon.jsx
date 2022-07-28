import { splitProps } from "solid-js"
function SyncOffIcon(props) {
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
			<path d="M17.94 9H12.3l.67-2.36a.5.5 0 00-.96-.28l-2 7a.5.5 0 00.96.28L12.02 10H18a8 8 0 01-16 0h5.98l-.96 3.36a.5.5 0 00.96.28l2-7a.5.5 0 00-.96-.28L8.27 9h-6.2a8 8 0 0115.87 0z" />
		</svg>
	)
}
export default SyncOffIcon
