import { splitProps } from "solid-js"
function AutocorrectIcon(props) {
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
			<path d="M2.17 14.75L8.03 4.16a2.25 2.25 0 013.94 0L14.1 8h3.15a.75.75 0 010 1.5h-2.26a4.25 4.25 0 11-2.89-1.49l.15-.01h.03l-1.84-3.25a.5.5 0 00-.87 0L3.47 15.5l-.06.12a.75.75 0 11-1.31-.73l.07-.13zM9 12.25a2.75 2.75 0 105.5 0 2.75 2.75 0 00-5.5 0z" />
		</svg>
	)
}
export default AutocorrectIcon
