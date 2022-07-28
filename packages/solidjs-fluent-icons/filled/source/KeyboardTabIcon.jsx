import { splitProps } from "solid-js"
function KeyboardTabIcon(props) {
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
			<path d="M17 4.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V4.75zm-8.47-.53a.75.75 0 00-1.06 1.06l3.97 3.97H2.75a.75.75 0 000 1.5h8.69l-3.97 3.97a.75.75 0 101.06 1.06l5.25-5.25c.3-.3.3-.77 0-1.06L8.53 4.22z" />
		</svg>
	)
}
export default KeyboardTabIcon
