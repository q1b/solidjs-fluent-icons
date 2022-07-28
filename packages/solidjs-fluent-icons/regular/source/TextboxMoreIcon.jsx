import { splitProps } from "solid-js"
function TextboxMoreIcon(props) {
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
			<path d="M6 6.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM6.5 9a.5.5 0 000 1h4a.5.5 0 000-1h-4zM6 12.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM14.5 3A2.5 2.5 0 0117 5.5v9l-.01.25c-.4 0-.77.1-1.09.29.07-.17.1-.35.1-.54v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h1.48c-.15.3-.23.64-.23 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm-4.25 14a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13 18.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm4 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
		</svg>
	)
}
export default TextboxMoreIcon
