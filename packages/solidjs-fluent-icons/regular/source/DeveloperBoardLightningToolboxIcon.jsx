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
			<path d="M7.5 2c.28 0 .5.22.5.5V4h1.5V2.5a.5.5 0 011 0V4H12V2.5a.5.5 0 011 0V4h.5A2.5 2.5 0 0116 6.5V7h1.5a.5.5 0 010 1H16v1.05a2.51 2.51 0 00-.5-.05H15V6.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5H9v1H8v1.5a.5.5 0 01-1 0V16h-.5A2.5 2.5 0 014 13.5V13H2.5a.5.5 0 010-1H4v-1.5H2.5a.5.5 0 010-1H4V8H2.5a.5.5 0 010-1H4v-.5A2.5 2.5 0 016.5 4H7V2.5c0-.28.22-.5.5-.5zm3.54 9.04a2.5 2.5 0 011.42-1.81.4.4 0 00-.36-.23h-1.53l.42-1.46c.12-.44-.44-.73-.73-.39l-2.67 3.2a.4.4 0 00.3.65h1.57l-.44 1.46a.4.4 0 00.07.37 2.5 2.5 0 011.95-1.79zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" />
		</svg>
	)
}
export default DeveloperBoardLightningToolboxIcon
