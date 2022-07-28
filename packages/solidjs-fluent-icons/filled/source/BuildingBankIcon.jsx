import { splitProps } from "solid-js"
function BuildingBankIcon(props) {
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
			<path d="M9.23 2.18a1.33 1.33 0 011.54 0l5.85 4.15A.92.92 0 0116.1 8H3.9a.92.92 0 01-.52-1.67l5.85-4.15zm.77 3.7a.83.83 0 100-1.67.83.83 0 000 1.66zM4.5 9v4h2V9h-2zM3 16.17c0-1.2.97-2.17 2.17-2.17h9.66c1.2 0 2.17.97 2.17 2.17v.33a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-.33zM15.5 9v4h-2V9h2zm-3 0v4h-2V9h2zm-3 0v4h-2V9h2z" />
		</svg>
	)
}
export default BuildingBankIcon
