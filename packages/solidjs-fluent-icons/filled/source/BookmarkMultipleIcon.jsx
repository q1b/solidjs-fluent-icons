import { splitProps } from "solid-js"
function BookmarkMultipleIcon(props) {
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
			<path d="M6.27 3A2 2 0 018 2h4.5A3.5 3.5 0 0116 5.5v10a.5.5 0 01-.78.42l-.22-.15V5.5A2.5 2.5 0 0012.5 3H6.27zM6 4a2 2 0 00-2 2v11.5a.5.5 0 00.78.42L9 15.1l4.22 2.82a.5.5 0 00.78-.42V6a2 2 0 00-2-2H6z" />
		</svg>
	)
}
export default BookmarkMultipleIcon
