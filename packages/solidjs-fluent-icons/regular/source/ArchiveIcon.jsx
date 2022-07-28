import { splitProps } from "solid-js"
function ArchiveIcon(props) {
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
			<path d="M8.5 10a.5.5 0 000 1h3a.5.5 0 000-1h-3zM2 4.75C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V14a3 3 0 01-3 3H6a3 3 0 01-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5zM3.75 4a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 00-.75-.75H3.75zM4 8v6c0 1.1.9 2 2 2h8a2 2 0 002-2V8H4z" />
		</svg>
	)
}
export default ArchiveIcon
