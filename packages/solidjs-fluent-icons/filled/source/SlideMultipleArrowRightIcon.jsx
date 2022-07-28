import { splitProps } from "solid-js"
function SlideMultipleArrowRightIcon(props) {
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
			<path d="M6 3a4 4 0 00-4 4v5c0 1.1.9 2 2 2V8a3 3 0 013-3h8a2 2 0 00-2-2H6zm1 3a2 2 0 00-2 2v7c0 1.1.9 2 2 2h2.6a5.5 5.5 0 018.4-6.74V8a2 2 0 00-2-2H7zm7.5 4a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default SlideMultipleArrowRightIcon
