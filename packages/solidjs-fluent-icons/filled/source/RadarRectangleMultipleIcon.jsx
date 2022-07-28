import { splitProps } from "solid-js"
function RadarRectangleMultipleIcon(props) {
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
			<path d="M14.28 3.24l-1.09 1.1A6.5 6.5 0 003.58 11H2.06a7.99 7.99 0 0112.22-7.76zM10 17v-.5c1.66 0 3.33-.63 4.6-1.9a.75.75 0 011.06 1.06A7.98 7.98 0 019.83 18a3 3 0 00.17-1zm0-2.5v.6c1.3 0 2.61-.5 3.6-1.5a.75.75 0 10-1.05-1.05 3.6 3.6 0 01-2.86 1.04c.2.25.31.57.31.91zM6.5 11h.04A3.6 3.6 0 0111 6.54l1.16-1.17A5.1 5.1 0 005 11h1.5zm9.28-6.78c.3.3.3.77 0 1.06l-4.33 4.33a1.5 1.5 0 11-1.06-1.06l4.33-4.33c.3-.3.77-.3 1.06 0zm1.47 9.03a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 7.5a.75.75 0 100-1.5.75.75 0 000 1.5zm1.5 3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM1.5 12a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-5zm7 2c.28 0 .5.22.5.5V17a2 2 0 01-2 2H3.5a.5.5 0 010-1H7a1 1 0 001-1v-2.5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default RadarRectangleMultipleIcon
