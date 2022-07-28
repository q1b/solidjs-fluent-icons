import { splitProps } from "solid-js"
function FoodPizzaIcon(props) {
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
			<path d="M4 3.96c0-1.1.9-2.03 2.03-1.96 4.45.28 8.35 1.77 11.4 4.7.87.82.7 2.17-.2 2.86l-.25.19-.4-.44V9.3A16.37 16.37 0 004.88 4.5H4v-.55zM4 5.5V16.5a1.5 1.5 0 002.4 1.2L8 16.5a1 1 0 002 0v-2a.5.5 0 011-.06V15a1 1 0 002 0v-2.24c.82-.6 2.09-1.56 3.19-2.4l-.33-.37A15.37 15.37 0 004.87 5.5H4zm4.25 2.74a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.97 2a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-2.96 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
		</svg>
	)
}
export default FoodPizzaIcon
