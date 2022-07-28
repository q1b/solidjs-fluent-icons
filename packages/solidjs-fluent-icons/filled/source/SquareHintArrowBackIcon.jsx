import { splitProps } from "solid-js"
function SquareHintArrowBackIcon(props) {
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
			<path d="M9.25 3a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM3 10.75a.75.75 0 001.5 0v-1.5a.75.75 0 00-1.5 0v1.5zm4.5 5.5c0-.41.34-.75.75-.75h.84c.1.53.27 1.03.51 1.5H8.25a.75.75 0 01-.75-.75zm8-7.16c.53.1 1.03.27 1.5.51V8.25a.75.75 0 00-1.5 0v.84zM6 3.75A.75.75 0 005.25 3C4.01 3 3 4 3 5.25a.75.75 0 001.5 0c0-.41.34-.75.75-.75S6 4.16 6 3.75zM5.25 17a.75.75 0 000-1.5.75.75 0 01-.75-.75.75.75 0 00-1.5 0C3 15.99 4 17 5.25 17zM14 3.75c0-.41.34-.75.75-.75C15.99 3 17 4 17 5.25a.75.75 0 01-1.5 0 .75.75 0 00-.75-.75.75.75 0 01-.75-.75zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0117 16.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7l1.76-1.75a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default SquareHintArrowBackIcon
