import { splitProps } from "solid-js"
function TextExpandIcon(props) {
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
			<path d="M4.75 3.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H4.75zM4 16.25c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75zm7-4c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0-4c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM5.5 14a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM6 8.5V10h1.5a.5.5 0 010 1H6v1.5a.5.5 0 01-1 0V11H3.5a.5.5 0 010-1H5V8.5a.5.5 0 011 0z" />
		</svg>
	)
}
export default TextExpandIcon
