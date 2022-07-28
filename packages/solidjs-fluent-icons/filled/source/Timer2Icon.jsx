import { splitProps } from "solid-js"
function Timer2Icon(props) {
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
			<path d="M7.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm7.66 1.93a.5.5 0 10-.71.7l1.41 1.42a.5.5 0 10.71-.7l-1.41-1.42zm1.29 6.2A3.5 3.5 0 0012 13.5c0 .7.47 1.27 1.1 1.45A3.49 3.49 0 0012 17.5v.04A6.98 6.98 0 012.5 11a7 7 0 0113.95-.87zM9 11.5a.5.5 0 001 0v-5a.5.5 0 00-1 0v5zm6.5-.5a2.5 2.5 0 00-2.5 2.5.5.5 0 001 0 1.5 1.5 0 111.5 1.5 2.5 2.5 0 00-2.5 2.5v1c0 .28.22.5.5.5h4a.5.5 0 000-1H14v-.5c0-.83.67-1.5 1.5-1.5a2.5 2.5 0 000-5z" />
		</svg>
	)
}
export default Timer2Icon
