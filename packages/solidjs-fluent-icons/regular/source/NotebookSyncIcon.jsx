import { splitProps } from "solid-js"
function NotebookSyncIcon(props) {
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
			<path d="M5.5 4.5A.5.5 0 005 5v2c0 .28.22.5.5.5h7A.5.5 0 0013 7V5a.5.5 0 00-.5-.5h-7zm.5 2v-1h6v1H6zM3 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H9.74c.26-.3.48-.64.66-1H13a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v5.2c-.35.1-.68.24-1 .4V4zm13 2h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm.5 3.5H16V12h.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H6a.5.5 0 010-1h.47a1.99 1.99 0 00-2.38.34.5.5 0 01-.71-.71A3 3 0 017 12.15V12c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 014 16.85V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z" />
		</svg>
	)
}
export default NotebookSyncIcon
