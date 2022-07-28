import { splitProps } from "solid-js"
function SlideMicrophoneIcon(props) {
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
			<path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v5.47a3 3 0 00-6 .03v1.07a1.5 1.5 0 00-1.95 1.64c.06.45.19.89.37 1.29H4.5A2.5 2.5 0 012 13.5v-7zm3.5.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 10c0 .28.22.5.5.5H11a.5.5 0 000-1H5.5a.5.5 0 00-.5.5zm.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm7.5 0a2 2 0 114 0v2a2 2 0 01-4 0v-2zm-.97 2.43a.5.5 0 10-.99.14 4 4 0 003.46 3.4v.53a.5.5 0 101 0v-.53a4 4 0 003.46-3.4.5.5 0 10-1-.14 3 3 0 01-5.93 0z" />
		</svg>
	)
}
export default SlideMicrophoneIcon
