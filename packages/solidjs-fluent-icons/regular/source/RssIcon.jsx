import { splitProps } from "solid-js"
function RssIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zM4 6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2.5 0a.5.5 0 000 1 6.5 6.5 0 016.5 6.5.5.5 0 001 0A7.5 7.5 0 006.5 6zM6 9.5c0-.28.22-.5.5-.5a4.5 4.5 0 014.5 4.5.5.5 0 01-1 0A3.5 3.5 0 006.5 10a.5.5 0 01-.5-.5zM7 14a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default RssIcon
