import { splitProps } from "solid-js"
function RouterIcon(props) {
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
			<path d="M3.5 9.5a6.5 6.5 0 0113 0 .5.5 0 001 0 7.5 7.5 0 00-15 0 .5.5 0 001 0zm6.5-4a4 4 0 00-4 4 .5.5 0 01-1 0 5 5 0 0110 0 .5.5 0 01-1 0 4 4 0 00-4-4zM7.75 9.25a2.25 2.25 0 112.75 2.2V13h4a2.5 2.5 0 010 5h-9a2.5 2.5 0 010-5h4v-1.56a2.25 2.25 0 01-1.75-2.19zM10 8a1.25 1.25 0 100 2.5A1.25 1.25 0 0010 8zm-4.5 6a1.5 1.5 0 000 3h9a1.5 1.5 0 000-3h-9z" />
		</svg>
	)
}
export default RouterIcon
