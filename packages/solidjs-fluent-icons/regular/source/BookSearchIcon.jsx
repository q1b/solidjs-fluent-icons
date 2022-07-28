import { splitProps } from "solid-js"
function BookSearchIcon(props) {
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
			<path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8zm-2.41 6.88a2.5 2.5 0 10-.7.7l1.26 1.27a.5.5 0 00.7-.7L11.6 9.88zM8 8.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
		</svg>
	)
}
export default BookSearchIcon
