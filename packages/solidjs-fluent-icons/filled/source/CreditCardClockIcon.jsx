import { splitProps } from "solid-js"
function CreditCardClockIcon(props) {
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
			<path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75V8H2V6.75zM9.2 16H4.76A2.75 2.75 0 012 13.25V9h12.5a5.5 5.5 0 00-5.3 7zm9.8-1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" />
		</svg>
	)
}
export default CreditCardClockIcon
