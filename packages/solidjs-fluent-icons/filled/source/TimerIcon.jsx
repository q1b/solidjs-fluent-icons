import { splitProps } from "solid-js"
function TimerIcon(props) {
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
			<path d="M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 11-.7.71l-1.42-1.41a.5.5 0 010-.71zM16.5 11a7 7 0 11-14 0 7 7 0 0114 0zM9 6.5v5a.5.5 0 001 0v-5a.5.5 0 00-1 0z" />
		</svg>
	)
}
export default TimerIcon
