import { splitProps } from "solid-js"
function MusicNote2Icon(props) {
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
			<path d="M15.99 3.02a1 1 0 00-1.29-.8l-7 2.2a1 1 0 00-.7.95v8.13a2.5 2.5 0 101 2V8.37l7-2.19v5.32a2.5 2.5 0 101 2V3.18l-.01-.16z" />
		</svg>
	)
}
export default MusicNote2Icon
