import { splitProps } from "solid-js"
function SleepIcon(props) {
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
			<path d="M11.59 2.61a.5.5 0 00-.59.55c.4 3.58-.5 6.1-1.85 7.75a6.94 6.94 0 01-4.69 2.6.5.5 0 00-.37.78 7.96 7.96 0 006.4 3.21A7.5 7.5 0 0018 10c0-3.72-2.9-6.78-6.4-7.39zm-1.66 8.93c1.43-1.77 2.36-4.34 2.13-7.8A6.65 6.65 0 0117 10a6.5 6.5 0 01-6.5 6.5 7.1 7.1 0 01-5.06-2.14 8.1 8.1 0 004.49-2.82zM3.5 10C4.33 10 5 9.33 5 8.5V4.89l3-.75v1.95A1.5 1.5 0 109 7.5v-4a.5.5 0 00-.62-.49l-4 1A.5.5 0 004 4.5v2.59A1.5 1.5 0 103.5 10z" />
		</svg>
	)
}
export default SleepIcon
