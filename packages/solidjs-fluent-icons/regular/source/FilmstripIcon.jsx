import { splitProps } from "solid-js"
function FilmstripIcon(props) {
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
			<path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v1h2V5H4zm-1 9a1 1 0 001 1h1v-2H3v1zm2-3.5H3V12h2v-1.5zM5 8H3v1.5h2V8zm9 7V5H6v10h8zm1-2v2h1a1 1 0 001-1v-1h-2zm2-1v-1.5h-2V12h2zm0-2.5V8h-2v1.5h2zM17 7V6a1 1 0 00-1-1h-1v2h2z" />
		</svg>
	)
}
export default FilmstripIcon
