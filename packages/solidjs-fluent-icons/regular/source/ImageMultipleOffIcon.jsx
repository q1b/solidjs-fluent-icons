import { splitProps } from "solid-js"
function ImageMultipleOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l1.4 1.41A2.99 2.99 0 003 6v6a3 3 0 003 3h6c.65 0 1.25-.2 1.74-.55l.86.85c-.59.44-1.31.7-2.1.7H5.76A3 3 0 008 17h4.5c1.06 0 2.04-.37 2.8-.98l1.85 1.83a.5.5 0 00.7-.7l-15-15zm5.63 7.04a2 2 0 00-.9.52L4.29 13A2 2 0 014 12V6a2 2 0 01.28-1.02l4.2 4.2zM14 6v5.88l.9.9A3 3 0 0015 12V6a3 3 0 00-3-3H6a3 3 0 00-.78.1l.9.9H12a2 2 0 012 2zm1.8 7.68l.76.76c.28-.59.44-1.25.44-1.94V8a3 3 0 00-1-2.24v6.74a3.56 3.56 0 01-.2 1.18zM11.5 7.5a1 1 0 100-2 1 1 0 000 2zm-1.8 2.91l3.32 3.31A2 2 0 0112 14H6a2 2 0 01-1.02-.28l3.31-3.3a1 1 0 011.42 0z" />
		</svg>
	)
}
export default ImageMultipleOffIcon
