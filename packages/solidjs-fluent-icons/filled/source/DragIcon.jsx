import { splitProps } from "solid-js"
function DragIcon(props) {
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
			<path d="M10 2c.2 0 .39.08.53.22l1.5 1.5a.75.75 0 01-1.06 1.06l-.22-.22v1.69a.75.75 0 01-1.5 0V4.56l-.22.22a.75.75 0 01-1.06-1.06l1.5-1.5A.75.75 0 0110 2zm2 8a2 2 0 11-4 0 2 2 0 014 0zm-9.78-.53a.75.75 0 000 1.06l1.5 1.5a.75.75 0 001.06-1.06l-.22-.22h1.69a.75.75 0 000-1.5H4.56l.22-.22a.75.75 0 00-1.06-1.06l-1.5 1.5zM10 18c.2 0 .39-.08.53-.22l1.5-1.5a.75.75 0 10-1.06-1.06l-.22.22v-1.69a.75.75 0 00-1.5 0v1.69l-.22-.22a.75.75 0 00-1.06 1.06l1.5 1.5c.14.14.33.22.53.22zm7.78-8.53a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l.22-.22h-1.69a.75.75 0 010-1.5h1.69l-.22-.22a.75.75 0 011.06-1.06l1.5 1.5z" />
		</svg>
	)
}
export default DragIcon
