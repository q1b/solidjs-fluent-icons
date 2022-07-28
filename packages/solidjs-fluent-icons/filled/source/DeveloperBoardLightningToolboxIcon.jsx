import { splitProps } from "solid-js"
function DeveloperBoardLightningToolboxIcon(props) {
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
			<path d="M8 2.5a.5.5 0 00-1 0V4h-.5A2.5 2.5 0 004 6.5V7H2.5a.5.5 0 000 1H4v1.5H2.5a.5.5 0 000 1H4V12H2.5a.5.5 0 000 1H4v.5A2.5 2.5 0 006.5 16H7v1.5a.5.5 0 001 0V16h1v-2.5c0-.23.03-.45.09-.67a.4.4 0 01-.07-.37L9.46 11H7.9a.4.4 0 01-.3-.66l2.66-3.19c.3-.34.85-.05.73.39L10.57 9h1.53c.17 0 .3.1.36.23.32-.15.67-.23 1.04-.23h2c.17 0 .34.02.5.05V8h1.5a.5.5 0 000-1H16v-.5A2.5 2.5 0 0013.5 4H13V2.5a.5.5 0 00-1 0V4h-1.5V2.5a.5.5 0 00-1 0V4H8V2.5zm4 9.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" />
		</svg>
	)
}
export default DeveloperBoardLightningToolboxIcon
