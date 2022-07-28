import { splitProps } from "solid-js"
function ArrowDownLeftIcon(props) {
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
			<path d="M12 16.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v5.69L15.72 3.22a.75.75 0 111.06 1.06L5.56 15.5h5.7c.4 0 .74.34.74.75z" />
		</svg>
	)
}
export default ArrowDownLeftIcon
