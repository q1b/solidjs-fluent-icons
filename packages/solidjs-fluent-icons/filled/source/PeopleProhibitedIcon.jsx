import { splitProps } from "solid-js"
function PeopleProhibitedIcon(props) {
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
			<path d="M6.75 9a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM17 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 00-1-.26H3.5a2 2 0 00-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 019 14.5zm1 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6z" />
		</svg>
	)
}
export default PeopleProhibitedIcon
