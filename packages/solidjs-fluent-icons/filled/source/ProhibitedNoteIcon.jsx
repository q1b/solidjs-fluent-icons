import { splitProps } from "solid-js"
function ProhibitedNoteIcon(props) {
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
			<path d="M18 10.17A8.02 8.02 0 0010 2a8 8 0 00-.84 15.96A3 3 0 019 17v-.58a6.47 6.47 0 01-3.04-1.32l1.57-1.57 7.57-7.57A6.47 6.47 0 0116.5 10h.5a3 3 0 011 .17zM14.04 4.9L4.9 14.04a6.5 6.5 0 019.13-9.13zM10 13c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-4zm6.5 3h-4a.5.5 0 100 1h4a.5.5 0 100-1zm-4-3a.5.5 0 100 1h4a.5.5 0 100-1h-4z" />
		</svg>
	)
}
export default ProhibitedNoteIcon
