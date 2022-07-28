import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowSettingsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 01-2-2V7h12v2.2c.35.1.68.24 1 .4V6a3 3 0 00-3-3H6zM4 6c0-1.1.9-2 2-2h8a2 2 0 012 2H4zm8.06 5.44a2 2 0 01-1.43 2.48l-.46.12a4.73 4.73 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default WindowSettingsIcon
