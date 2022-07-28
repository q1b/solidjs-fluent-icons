import { splitProps, ComponentProps, JSX } from "solid-js"

function FlashSettingsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.19 2.77c.13-.46.55-.77 1.02-.77h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81l-.24.25a5.55 5.55 0 00-1.37-.03l.9-.91a.06.06 0 00.01-.03v-.05a.08.08 0 00-.03-.03L14.77 8H11.5a.5.5 0 01-.47-.67l1.49-4.25a.06.06 0 00-.06-.08H7.21a.06.06 0 00-.06.05L4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 01.5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 2.89-2.95a5.57 5.57 0 00.05 1.38l-2.22 2.26c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l2.25-7.87zm5.88 8.67a2 2 0 01-1.43 2.48l-.46.12a4.7 4.7 0 000 1.02l.35.08A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default FlashSettingsIcon
