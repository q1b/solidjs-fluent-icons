import { splitProps } from "solid-js"
function CellularData2Icon(props) {
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
			<path d="M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.1v-2.6c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64v6.61a.75.75 0 01-1.48.11l-.01-.11v-6.5c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64v8.61a.75.75 0 01-1.48.11l-.01-.11v-8.5c0-.41.34-.75.75-.75z" />
		</svg>
	)
}
export default CellularData2Icon
