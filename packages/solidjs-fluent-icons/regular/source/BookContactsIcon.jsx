import { splitProps } from "solid-js"
function BookContactsIcon(props) {
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
			<path d="M11.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 10.75V11c0 1.1.9 2 2 2h2a2 2 0 002-2v-.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75zM4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8z" />
		</svg>
	)
}
export default BookContactsIcon
