import { splitProps } from "solid-js"
function HandOpenHeartIcon(props) {
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
			<path d="M13.4 10.52l-3.36-3.67a.6.6 0 01-.87.01L5.28 2.97a.75.75 0 10-1.06 1.06l3.86 3.86a.58.58 0 11-.81.82L3.28 4.72a.75.75 0 00-1.06 1.06l4.05 4.05a.49.49 0 01-.69.7l-2.3-2.31a.75.75 0 00-1.06 1.06l3.82 3.82-.5.12c-.78.21-1.78.65-2.38 1.6A1 1 0 003.22 16c.23.3.6.48 1 .47 2.15-.01 4.77.39 6.85 1.24 1.2.5 2.69.43 3.71-.52l1.25-1.15a3 3 0 00.77-3.3l-.97-2.46-.22.25a1.5 1.5 0 01-2.22 0zm-3.68 3.43a.5.5 0 01-.44-.9c.6-.3 1.46-.43 2.3-.3.86.15 1.74.58 2.34 1.47a.5.5 0 01-.84.56 2.42 2.42 0 00-1.66-1.04c-.66-.1-1.3 0-1.7.2zM9.34 2.92a3.4 3.4 0 00-.3 2.04L7.23 3.03a.75.75 0 111.06-1.06c.29.29.65.6 1.06.95zM14.5 3l-.63-.49a2.4 2.4 0 00-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 00-3.24-3.5l-.63.5z" />
		</svg>
	)
}
export default HandOpenHeartIcon
