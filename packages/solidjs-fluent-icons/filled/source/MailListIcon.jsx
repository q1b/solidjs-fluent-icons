import { splitProps } from "solid-js"
function MailListIcon(props) {
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
			<path d="M11.5 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm-7-2h5.59a1.5 1.5 0 00.3 1.5A1.5 1.5 0 0011.5 8h3.45L10 10.92l-7.98-4.7A2.5 2.5 0 014.5 4zm5.75 7.93L16.93 8h.57c.18 0 .34-.03.5-.09v6.59a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0z" />
		</svg>
	)
}
export default MailListIcon
