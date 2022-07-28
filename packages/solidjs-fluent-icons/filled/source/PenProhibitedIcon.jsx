import { splitProps } from "solid-js"
function PenProhibitedIcon(props) {
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
			<path d="M17.18 2.93a2.97 2.97 0 00-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0115 9.2l2.13-2.12a2.97 2.97 0 00.05-4.15zM9 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6z" />
		</svg>
	)
}
export default PenProhibitedIcon
