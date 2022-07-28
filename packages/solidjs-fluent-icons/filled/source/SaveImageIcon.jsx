import { splitProps } from "solid-js"
function SaveImageIcon(props) {
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
			<path d="M5 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2v-5.5C5 9.67 5.67 9 6.5 9h10c.17 0 .34.01.5.04V5.62a2 2 0 00-.59-1.41L14.8 2.59A2 2 0 0013.38 2H13v3.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 5.5V2H5zm5.05 8A3.49 3.49 0 009 12.5V16H6v-5.5c0-.28.22-.5.5-.5h3.55zM12 2H7v3.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V2zm-2 10.5a2.5 2.5 0 012.5-2.5h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0l-3.03 3.03z" />
		</svg>
	)
}
export default SaveImageIcon
