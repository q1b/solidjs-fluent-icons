import { splitProps } from "solid-js"
function PeopleAddIcon(props) {
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
			<path d="M6.75 9a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM17 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 00-1-.26H3.5a2 2 0 00-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 019 14.5zm10 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default PeopleAddIcon
