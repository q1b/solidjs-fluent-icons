import { splitProps } from "solid-js"
function TableCalculatorIcon(props) {
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
			<path d="M13 7h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-6 5V8H3v4h4zm5-3.5V8H8v4h3v-1.5c0-.82.4-1.54 1-2zM11 13H8v4h3v-4zm-4 0H3v1.5A2.5 2.5 0 005.5 17H7v-4zm5-6V3H8v4h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm5 7.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7zm2.5 2.5h-1a.5.5 0 000 1h1a.5.5 0 000-1zm3.5.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5zM14.5 15h-1a.5.5 0 000 1h1a.5.5 0 000-1zm3.5.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5zM14.5 17h-1a.5.5 0 000 1h1a.5.5 0 000-1zm3.5.5a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h1a.5.5 0 00.5-.5zM13.5 10a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-4z" />
		</svg>
	)
}
export default TableCalculatorIcon
