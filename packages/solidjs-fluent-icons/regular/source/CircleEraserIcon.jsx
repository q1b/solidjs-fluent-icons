import { splitProps } from "solid-js"
function CircleEraserIcon(props) {
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
			<path d="M8.73 17.17c-.1-.1-.2-.22-.29-.35A7 7 0 0110 3a7 7 0 016.82 5.44c.13.09.24.18.35.3l.8.8a8 8 0 10-8.43 8.44l-.8-.8zm.7-.7a1.5 1.5 0 010-2.13l4.9-4.9a1.5 1.5 0 012.13 0l2.1 2.1a1.5 1.5 0 010 2.12L14.22 18h2.53a.5.5 0 010 1h-4.1a1.5 1.5 0 01-1.12-.44l-2.1-2.1zm5.62-6.32l-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 000-.71l-2.1-2.1a.5.5 0 00-.7 0zm-1.5 7.1l-2.8-2.8-.6.6a.5.5 0 000 .71l2.1 2.1a.5.5 0 00.7 0l.6-.6z" />
		</svg>
	)
}
export default CircleEraserIcon
