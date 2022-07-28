import { splitProps } from "solid-js"
function TextColumnTwoLeftIcon(props) {
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
			<path d="M3 5.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 013 5.75zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 019 5.75zm-6 3c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 013 8.75zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 019 8.75zm-6 3c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm-6 3c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm6 0c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" />
		</svg>
	)
}
export default TextColumnTwoLeftIcon
