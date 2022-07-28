import { splitProps } from "solid-js"
function DismissSquareIcon(props) {
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
			<path d="M7.15 7.15c.2-.2.5-.2.7 0L10 9.29l2.15-2.14a.5.5 0 01.7.7L10.71 10l2.14 2.15a.5.5 0 01-.7.7L10 10.71l-2.15 2.14a.5.5 0 01-.7-.7L9.29 10 7.15 7.85a.5.5 0 010-.7zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6z" />
		</svg>
	)
}
export default DismissSquareIcon
