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
			<path d="M14.5 3.38l-.72.72A7 7 0 003.08 11H2.05A7.99 7.99 0 0114.5 3.38zM9.83 18a3 3 0 00.17-1c1.8 0 3.58-.68 4.95-2.05a.5.5 0 01.7.7A7.98 7.98 0 019.84 18zm.17-3.5v.5c1.28 0 2.56-.49 3.54-1.46a.5.5 0 10-.71-.71c-.8.8-1.86 1.2-2.92 1.17.06.16.09.32.09.5zM5.1 11h1.03a4 4 0 015.43-4.68l.75-.75A5 5 0 005.1 11zm10.75-6.85c.2.2.2.5 0 .7l-4.88 4.9a1 1 0 11-.71-.72l4.89-4.88c.2-.2.5-.2.7 0zM17 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM16.5 7a.5.5 0 100-1 .5.5 0 000 1zm1.5 4.25a.5.5 0 11-1 0 .5.5 0 011 0zm-.5-2a.5.5 0 100-1 .5.5 0 000 1zm-2.5 2a.5.5 0 11-1 0 .5.5 0 011 0zm-.5-2a.5.5 0 100-1 .5.5 0 000 1zM1.5 12a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-5zm7 2c.28 0 .5.22.5.5V17a2 2 0 01-2 2H3.5a.5.5 0 010-1H7a1 1 0 001-1v-2.5c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default RadarRectangleMultipleIcon
