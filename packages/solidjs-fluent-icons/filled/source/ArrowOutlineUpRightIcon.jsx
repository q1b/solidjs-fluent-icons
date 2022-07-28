import { splitProps } from "solid-js"
function ArrowOutlineUpRightIcon(props) {
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
			<path d="M16.33 2c.96-.1 1.77.71 1.66 1.67l-1.08 9.7a1.5 1.5 0 01-2.55.9L13.3 13.2l-4.36 4.36a1.5 1.5 0 01-2.12 0l-4.37-4.37a1.5 1.5 0 010-2.12L6.8 6.7 5.74 5.64a1.5 1.5 0 01.89-2.55L16.33 2z" />
		</svg>
	)
}
export default ArrowOutlineUpRightIcon
