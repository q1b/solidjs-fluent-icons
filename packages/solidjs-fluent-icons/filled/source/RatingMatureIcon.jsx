import { splitProps } from "solid-js"
function RatingMatureIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.92 1.24A.5.5 0 007 7.5v5a.5.5 0 101 0V9.24l1.58 2.53a.5.5 0 00.84 0L12 9.24v3.26a.5.5 0 101 0v-5a.5.5 0 00-.92-.26L10 10.56 7.92 7.24z" />
		</svg>
	)
}
export default RatingMatureIcon
