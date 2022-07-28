import { splitProps } from "solid-js"
function PeopleEditIcon(props) {
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
			<path d="M6.75 9a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM10 10a2 2 0 012 1.94l-1.73 1.73c-.4.41-.7.92-.84 1.49l-.1.42c-.68.26-1.52.42-2.58.42-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10zm7-3.5A2.49 2.49 0 0114.5 9 2.5 2.5 0 1117 6.5zm-1.2 3.05l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" />
		</svg>
	)
}
export default PeopleEditIcon
