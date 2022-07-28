import { splitProps } from "solid-js"
function TableImageIcon(props) {
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
			<path d="M16.5 9c.17 0 .34.01.5.04V8h-4v1h3.5zM9 16.5V13H8v4h1.04a3.53 3.53 0 01-.04-.5zm.04-4.5A3.5 3.5 0 0112 9.04V8H8v4h1.04zM7 12V8H3v4h4zm-4 1h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-1-4v4H8V3h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm3 9.5a2.5 2.5 0 012.5-2.5h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0l-3.03 3.03z" />
		</svg>
	)
}
export default TableImageIcon
