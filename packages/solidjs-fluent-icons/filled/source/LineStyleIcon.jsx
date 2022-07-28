import { splitProps } from "solid-js"
function LineStyleIcon(props) {
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
			<path d="M2 4.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 012 4.75zm6 0c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 018 4.75zm6 0c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm-12 5c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM3.25 14a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5H3.25z" />
		</svg>
	)
}
export default LineStyleIcon
