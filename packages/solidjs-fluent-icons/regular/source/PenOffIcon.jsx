import { splitProps } from "solid-js"
function PenOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l5.4 5.4-4 4c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.88c.47-.1.9-.33 1.24-.67l3.98-3.98 5.4 5.4a.5.5 0 00.7-.71l-15-15zm8.2 9.6l-3.99 3.98c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l3.99-4 2.8 2.79zm5.37-5.38l-3.96 3.97.7.7 2.59-2.58.34.33a1 1 0 010 1.42l-.94.94a.5.5 0 10.7.7l.94-.94a2 2 0 000-2.82l-.33-.34.67-.67a2.97 2.97 0 00-4.21-4.2L8.96 6.83l.7.7 3.97-3.96a1.97 1.97 0 012.79 2.8z" />
		</svg>
	)
}
export default PenOffIcon
