import { splitProps } from "solid-js"
function MentionArrowDownIcon(props) {
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
			<path d="M10 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM5.15 7.85A.5.5 0 005.5 8a.5.5 0 00.35-.15l2-2a.5.5 0 10-.7-.7L6 6.29V3.5a.5.5 0 00-1 0v2.8L3.85 5.14a.5.5 0 10-.7.7l2 2zm7.85.2A3.2 3.2 0 0010.79 7c-.1.35-.23.68-.4 1L10.5 8c1.58 0 2.5 1.17 2.5 3 0 1.8-.97 3-2.5 3S8 12.8 8 11c0-.22.01-.42.04-.62-.33.17-.68.3-1.04.41V11c0 2.3 1.36 4 3.5 4 1.28 0 2.28-.6 2.88-1.59.48 1.3 1.4 2.09 2.62 2.09 1.86 0 3-1.8 3-4.5a8 8 0 00-8.59-7.98c.16.31.29.64.38.98H11a7 7 0 017 7c0 2.22-.81 3.5-2 3.5s-2-1.28-2-3.5V7.41a.5.5 0 00-1 .09v.54zM3.02 10.4c.31.16.64.29.98.38V11a7 7 0 009.38 6.58.5.5 0 01.34.94 7.99 7.99 0 01-10.7-8.1z" />
		</svg>
	)
}
export default MentionArrowDownIcon
