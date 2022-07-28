import { splitProps } from "solid-js"
function PeopleListIcon(props) {
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
			<path d="M6.75 10a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zm3.75 2.5c0-.48.23-.91.58-1.18A2 2 0 0010 11H3.5a2 2 0 00-2 2s0 4 5.25 4c1.95 0 3.18-.55 3.95-1.25.05-.09.11-.17.18-.25a1.5 1.5 0 010-2 1.5 1.5 0 01-.38-1zm6.5-5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 12a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6z" />
		</svg>
	)
}
export default PeopleListIcon
