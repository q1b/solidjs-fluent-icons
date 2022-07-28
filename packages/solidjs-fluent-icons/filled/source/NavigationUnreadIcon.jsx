import { splitProps } from "solid-js"
function NavigationUnreadIcon(props) {
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
			<path d="M17.98 4.57l.02-.32a2.25 2.25 0 10-.28 1.08c.13-.24.22-.5.26-.76zM2.75 4h9.76a3.28 3.28 0 00.24 1.5h-10a.75.75 0 010-1.5zM2 9.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
		</svg>
	)
}
export default NavigationUnreadIcon
