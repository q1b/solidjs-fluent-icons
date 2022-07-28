import { splitProps } from "solid-js"
function ImageIcon(props) {
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
			<path d="M14 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v8c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 00-2-2H6zm0 12h8a2 2 0 001.01-.27l-4.66-4.58a.5.5 0 00-.7 0l-4.66 4.58A2 2 0 006 16z" />
		</svg>
	)
}
export default ImageIcon
