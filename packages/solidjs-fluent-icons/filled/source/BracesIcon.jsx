import { splitProps } from "solid-js"
function BracesIcon(props) {
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
			<path d="M3.5 5.75A2.75 2.75 0 016.23 3a.75.75 0 110 1.5C5.55 4.5 5 5.06 5 5.75L5 8.38c0 .6-.21 1.17-.58 1.62.37.45.58 1.02.58 1.62v2.63c0 .7.56 1.25 1.25 1.25a.75.75 0 010 1.5 2.75 2.75 0 01-2.75-2.75v-2.63c0-.4-.22-.76-.57-.94a.75.75 0 010-1.36c.35-.18.57-.54.57-.94V5.75zm13 0A2.75 2.75 0 0013.77 3a.75.75 0 000 1.5c.69 0 1.25.56 1.25 1.25L15 8.38c0 .6.21 1.17.58 1.62a2.56 2.56 0 00-.58 1.62v2.63c0 .7-.56 1.25-1.25 1.25a.75.75 0 000 1.5 2.75 2.75 0 002.75-2.75v-2.63c0-.4.22-.76.57-.94a.75.75 0 000-1.36 1.06 1.06 0 01-.57-.94V5.75z" />
		</svg>
	)
}
export default BracesIcon
