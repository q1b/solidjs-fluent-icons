import { splitProps } from "solid-js"
function PlaySettingsIcon(props) {
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
			<path d="M17.22 8.69a1.5 1.5 0 010 2.62l-5.23 2.88a5.5 5.5 0 00-.16-1.05l4.9-2.7a.5.5 0 000-.88l-9.99-5.5A.5.5 0 006 4.5v4.52c-.34.03-.68.1-1 .19V4.5a1.5 1.5 0 012.22-1.32l10 5.5zM4.06 11.44a2 2 0 01-1.43 2.48l-.46.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 014 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 019 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zM6.5 15.5a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default PlaySettingsIcon
