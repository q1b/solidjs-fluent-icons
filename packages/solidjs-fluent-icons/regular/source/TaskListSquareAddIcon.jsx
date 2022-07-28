import { splitProps } from "solid-js"
function TaskListSquareAddIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v3.2c.35.1.68.24 1 .4V6a3 3 0 00-3-3H6zm3.35 4.1a.5.5 0 00-.7-.7L7.23 7.8l-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm1.15-3.9c0-.28.22-.5.5-.5h2.5a.5.5 0 010 1H11a.5.5 0 01-.5-.5zm8.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default TaskListSquareAddIcon
