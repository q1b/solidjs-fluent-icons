import { splitProps } from "solid-js"
function ReceiptBagIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v4a3 3 0 011 .17A3 3 0 019 11v.09c.58.2 1 .76 1 1.41V16h5a3 3 0 003-3v-2h-3V4a2 2 0 00-2-2H6zm11 11a2 2 0 01-2 2v-3h2v1zM7 5.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 2c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM5 9.27A2 2 0 002 11v1h-.5a.5.5 0 00-.5.5V17c0 1.1.9 2 2 2h4a2 2 0 002-2v-4.5a.5.5 0 00-.5-.5H8v-1a2 2 0 00-3-1.73zM5 11v1H3v-1a1 1 0 112 0zm1 0a2 2 0 00-.25-.97A1 1 0 017 11v1H6v-1z" />
		</svg>
	)
}
export default ReceiptBagIcon
