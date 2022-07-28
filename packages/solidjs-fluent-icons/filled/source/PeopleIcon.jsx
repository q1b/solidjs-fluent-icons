import { splitProps } from "solid-js"
function PeopleIcon(props) {
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
			<path d="M6.75 10a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zm5.69 5.14c.53.22 1.2.36 2.06.36 4 0 4-3 4-3 0-.83-.67-1.5-1.5-1.5h-4.63c.4.48.63 1.09.63 1.75v.36a2.94 2.94 0 01-.02.25 4.62 4.62 0 01-.54 1.78zM17 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM1.5 13c0-1.1.9-2 2-2H10a2 2 0 012 2s0 4-5.25 4-5.25-4-5.25-4zm11.5.1v.07-.06z" />
		</svg>
	)
}
export default PeopleIcon
