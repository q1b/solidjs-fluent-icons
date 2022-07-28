import { splitProps } from "solid-js"
function GamesIcon(props) {
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
			<path d="M6 7.5a.5.5 0 011 0V9h1.5a.5.5 0 010 1H7v1.5a.5.5 0 01-1 0V10H4.5a.5.5 0 010-1H6V7.5zm9 .5a1 1 0 11-2 0 1 1 0 012 0zm-3 4a1 1 0 100-2 1 1 0 000 2zM2 9.5A5.5 5.5 0 017.5 4h5a5.5 5.5 0 110 11h-5A5.5 5.5 0 012 9.5zM7.5 5a4.5 4.5 0 000 9h5a4.5 4.5 0 100-9h-5z" />
		</svg>
	)
}
export default GamesIcon
