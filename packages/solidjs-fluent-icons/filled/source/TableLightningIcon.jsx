import { splitProps } from "solid-js"
function TableLightningIcon(props) {
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
			<path d="M13.58 9H17V8h-4v1.12c.18-.08.38-.12.58-.12zm-2.25 3l.67-1.6V8H8v4h3.33zm-1.21 2.92l.8-1.92H8v4h3.5a1.5 1.5 0 01-1.38-2.08zM7 12V8H3v4h4zm-4 1h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-1-4v4H8V3h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm5.61 13c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 00-.51-1.3h-.4a.5.5 0 01-.48-.66l.56-1.68a.5.5 0 00-.47-.66h-3.48a.5.5 0 00-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11z" />
		</svg>
	)
}
export default TableLightningIcon
