import { splitProps } from "solid-js"
function KeyCommandIcon(props) {
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
			<path d="M5.75 4.5C6.44 4.5 7 5.06 7 5.75V7H5.75a1.25 1.25 0 110-2.5zM8.5 7V5.75A2.75 2.75 0 105.75 8.5H7v3H5.75a2.75 2.75 0 102.75 2.75V13h3v1.25a2.75 2.75 0 102.75-2.75H13v-3h1.25a2.75 2.75 0 10-2.75-2.75V7h-3zm0 1.5h3v3h-3v-3zM13 7V5.75A1.25 1.25 0 1114.25 7H13zm0 6h1.25A1.25 1.25 0 1113 14.25V13zm-6 0v1.25A1.25 1.25 0 115.75 13H7z" />
		</svg>
	)
}
export default KeyCommandIcon
