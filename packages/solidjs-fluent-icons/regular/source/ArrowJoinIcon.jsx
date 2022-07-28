import { splitProps } from "solid-js"
function ArrowJoinIcon(props) {
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
			<path d="M5 2.5a.5.5 0 00-1 0 7.45 7.45 0 004.78 7 7.45 7.45 0 00-4.78 7 .5.5 0 001 0c0-3.62 2.88-6.5 6.5-6.5h.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L12.29 9h-.79A6.46 6.46 0 015 2.5zM8.5 4a.5.5 0 000 1H15c.52 0 1 .48 1 1v7c0 .52-.48 1-1 1H8.5a.5.5 0 000 1H15c1.08 0 2-.92 2-2V6c0-1.08-.92-2-2-2H8.5z" />
		</svg>
	)
}
export default ArrowJoinIcon
