import { splitProps } from "solid-js"
function TextBulletListSquareSettingsIcon(props) {
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
			<path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h4.6a5.48 5.48 0 01.66-6H9.5a.5.5 0 010-1h1.84A5.47 5.47 0 0117 9.6V5a2 2 0 00-2-2H5zm2.5 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 11a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.5 7h4a.5.5 0 010 1h-4a.5.5 0 010-1zm2.56 4.44a2 2 0 01-1.43 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default TextBulletListSquareSettingsIcon
