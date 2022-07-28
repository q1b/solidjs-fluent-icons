import { splitProps } from "solid-js"
function TimePickerIcon(props) {
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
			<path d="M10.32 2.12a.5.5 0 00-.64 0l-3 2.5a.5.5 0 10.64.76L10 3.15l2.68 2.23a.5.5 0 00.64-.76l-3-2.5zm3 13.26l-3 2.5a.5.5 0 01-.64 0l-3-2.5a.5.5 0 11.64-.76L10 16.85l2.68-2.23a.5.5 0 01.64.76zm-2.57-6.63a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10 12a.75.75 0 100-1.5.75.75 0 000 1.5zm6-2.5a1.5 1.5 0 013 0v1a1.5 1.5 0 01-3 0v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 001 0v-1a.5.5 0 00-.5-.5zm-11-1C5.67 8 5 8.67 5 9.5v1a1.5 1.5 0 003 0v-1C8 8.67 7.33 8 6.5 8zM6 9.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm6 0a1.5 1.5 0 013 0v1a1.5 1.5 0 01-3 0v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 001 0v-1a.5.5 0 00-.5-.5zm-11-1C1.67 8 1 8.67 1 9.5v1a1.5 1.5 0 003 0v-1C4 8.67 3.33 8 2.5 8zM2 9.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1z" />
		</svg>
	)
}
export default TimePickerIcon
