import { splitProps } from "solid-js"
function CommentLightningIcon(props) {
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
			<path d="M12.61 7c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 00-.51-1.3h-.4a.5.5 0 01-.48-.66l.56-1.68a.5.5 0 00-.47-.66h-3.48a.5.5 0 00-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11zm-1.28-4l-.41 1H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l4.28-3.16h4.92c.9 0 1.6-.71 1.6-1.56V7.94L18 7v5.28a2.58 2.58 0 01-2.6 2.56h-4.59L6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h6.73z" />
		</svg>
	)
}
export default CommentLightningIcon
