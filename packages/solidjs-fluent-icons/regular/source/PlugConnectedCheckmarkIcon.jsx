import { splitProps } from "solid-js"
function PlugConnectedCheckmarkIcon(props) {
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
			<path d="M17.85 2.85a.5.5 0 00-.7-.7L14.48 4.8a4.04 4.04 0 00-5.33.34l-.3.3a1.49 1.49 0 000 2.1l2.46 2.47c.28-.2.58-.38.9-.52L9.55 6.85c-.19-.2-.19-.5 0-.7l.3-.3a3.04 3.04 0 015.01 3.16c.35.02.68.08 1 .16.37-1.23.15-2.6-.67-3.65l2.66-2.67zm-10.3 6l2.47 2.46c-.2.28-.38.58-.52.9L6.85 9.55c-.2-.19-.5-.19-.7 0l-.3.3a3.04 3.04 0 003.16 5.01c.02.35.08.68.16 1-1.23.37-2.6.15-3.65-.67l-2.67 2.66a.5.5 0 01-.7-.7l2.66-2.67a4.04 4.04 0 01.34-5.33l.3-.3a1.49 1.49 0 012.1 0zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default PlugConnectedCheckmarkIcon
