import { splitProps } from "solid-js"
function FlashFlowIcon(props) {
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
			<path d="M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l4.81-4.92-.25-.76h-.18a3 3 0 11.59-3A2.5 2.5 0 0114 10.37l1.52-1.55c.65-.68.19-1.82-.76-1.82h-2.56l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2zm10.72 13.77A2.01 2.01 0 0019 14a2 2 0 00-3.73-1h-1.05a.5.5 0 01-.47-.34l-.55-1.63A1.5 1.5 0 0011.78 10H11a2 2 0 10-.27 1h1.05c.21 0 .4.14.47.34l.55 1.63V13a1.5 1.5 0 001.42 1H15a2 2 0 002.93 1.77zm-.44-.9a1 1 0 01-1.49-.86V14a1 1 0 012-.01V14a1 1 0 01-.51.87zM10 10a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default FlashFlowIcon
