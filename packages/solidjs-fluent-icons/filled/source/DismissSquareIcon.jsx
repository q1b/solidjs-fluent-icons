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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.15 1.15a.5.5 0 000 .7L9.29 10l-2.14 2.15a.5.5 0 00.7.7L10 10.71l2.15 2.14a.5.5 0 00.7-.7L10.71 10l2.14-2.15a.5.5 0 00-.7-.7L10 9.29 7.85 7.15a.5.5 0 00-.7 0z" />
		</svg>
	)
}
export default DismissSquareIcon
