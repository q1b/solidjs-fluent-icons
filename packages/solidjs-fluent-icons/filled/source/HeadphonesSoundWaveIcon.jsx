import { splitProps } from "solid-js"
function HeadphonesSoundWaveIcon(props) {
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
			<path d="M10 3a7 7 0 00-7 7v1h1.5c.28 0 .5.22.5.5v6a.5.5 0 01-.5.5H4a2 2 0 01-2-2v-6a8 8 0 1116 0v6a2 2 0 01-2 2h-.5a.5.5 0 01-.5-.5v-6c0-.28.22-.5.5-.5H17v-1a7 7 0 00-7-7zm.5 7.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm-3 1.5c.28 0 .5.22.5.5v4a.5.5 0 01-1 0v-4c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 00-1 0v4a.5.5 0 001 0v-4z" />
		</svg>
	)
}
export default HeadphonesSoundWaveIcon
