import { splitProps } from "solid-js"
function StarEmphasisIcon(props) {
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
			<path d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zM4.4 12.69a.5.5 0 01-.08.7l-2.5 2a.5.5 0 11-.62-.78l2.5-2a.5.5 0 01.7.08zM4.31 5.1a.5.5 0 11-.62.78l-2.5-2a.5.5 0 11.62-.78l2.5 2zm11.3 7.58a.5.5 0 00.08.7l2.5 2a.5.5 0 10.62-.78l-2.5-2a.5.5 0 00-.7.08zm.08-7.58a.5.5 0 00.62.78l2.5-2a.5.5 0 10-.62-.78l-2.5 2z" />
		</svg>
	)
}
export default StarEmphasisIcon
