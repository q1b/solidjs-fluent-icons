import { splitProps } from "solid-js"
function AlertBadgeIcon(props) {
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
			<path d="M12.45 16a2.5 2.5 0 01-4.9 0h4.9zM10 2c1.09 0 2.11.28 3 .77a3 3 0 003 5.06v3.58l.95 2.59.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 01-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0110 2zm5 5a2 2 0 100-4 2 2 0 000 4z" />
		</svg>
	)
}
export default AlertBadgeIcon
