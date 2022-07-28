import { splitProps } from "solid-js"
function SignOutIcon(props) {
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
			<path d="M8.5 11.25a.75.75 0 100-1.5.75.75 0 000 1.5zM11 3.5a.5.5 0 00-.58-.5l-7 1.08a.5.5 0 00-.42.49v10.86c0 .25.18.46.42.5l7 1.07a.5.5 0 00.58-.5V10h5.17l-1 .87a.5.5 0 00.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 10-.65.76l1 .87H11V3.5zm-1 .58v11.84L4 15V5l6-.92zM12.5 16H12v-5h1v4.5a.5.5 0 01-.5.5zM12 8V4h.5c.28 0 .5.22.5.5V8h-1z" />
		</svg>
	)
}
export default SignOutIcon
