import { splitProps } from "solid-js"
function PeopleSettingsIcon(props) {
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
			<path d="M6.75 9a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM17 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 00-1-.26H3.5a2 2 0 00-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 019 14.5zm3.06-3.06a2 2 0 01-1.43 2.48l-.46.12a4.73 4.73 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default PeopleSettingsIcon
