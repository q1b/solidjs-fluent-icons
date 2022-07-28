import { splitProps } from "solid-js"
function PenIcon(props) {
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
			<path d="M17.18 2.93a2.97 2.97 0 00-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.88c.47-.1.9-.33 1.24-.67l7.98-7.98.34.33a1 1 0 010 1.42l-.94.94a.5.5 0 00.7.7l.94-.94a2 2 0 000-2.82l-.33-.34.67-.67a2.97 2.97 0 00.05-4.15zm-3.55.65a1.97 1.97 0 012.79 2.8l-9.36 9.35c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l9.37-9.38z" />
		</svg>
	)
}
export default PenIcon
