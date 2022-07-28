import { splitProps } from "solid-js"
function FontIncreaseIcon(props) {
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
			<path d="M14.24 4.82a.75.75 0 01-.98-1.14l1.75-1.5c.28-.24.7-.24.98 0l1.75 1.5a.75.75 0 11-.98 1.14L15.5 3.74l-1.26 1.08zM10 3.75c-.3 0-.58.18-.7.47l-4.5 11a.75.75 0 001.4.56l1.44-3.53h4.72l1.45 3.53a.75.75 0 101.38-.56l-4.5-11a.75.75 0 00-.69-.47zm0 2.73l1.75 4.27h-3.5L10 6.48z" />
		</svg>
	)
}
export default FontIncreaseIcon
