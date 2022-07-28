import { splitProps } from "solid-js"
function AddIcon(props) {
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
			<path d="M10.5 2.75a.75.75 0 00-1.5 0V9H2.75a.75.75 0 000 1.5H9v6.25a.75.75 0 001.5 0V10.5h6.25a.75.75 0 000-1.5H10.5V2.75z" />
		</svg>
	)
}
export default AddIcon
