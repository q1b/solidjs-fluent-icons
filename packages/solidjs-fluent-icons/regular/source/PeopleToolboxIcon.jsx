import { splitProps } from "solid-js"
function PeopleToolboxIcon(props) {
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
			<path d="M6.75 3.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3.5 5.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM14.5 9a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-3.26 1.43A2 2 0 0010 10H3.5a2 2 0 00-2 2V12.08a1.72 1.72 0 00.01.18 3.95 3.95 0 00.67 1.8C2.88 15.09 4.24 16 6.75 16c.89 0 1.63-.11 2.25-.3v-1.07c-.56.22-1.3.37-2.25.37-2.24 0-3.26-.8-3.74-1.5a2.95 2.95 0 01-.5-1.42l-.01-.02V12a1 1 0 011-1H10a1 1 0 01.57.18c.15-.06.3-.1.47-.14.04-.21.1-.42.2-.6zM14.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" />
		</svg>
	)
}
export default PeopleToolboxIcon
