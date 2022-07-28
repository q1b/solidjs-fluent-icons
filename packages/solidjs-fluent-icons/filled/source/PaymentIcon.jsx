import { splitProps } from "solid-js"
function PaymentIcon(props) {
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
			<path d="M4.75 4A2.75 2.75 0 002 6.75V8h16V6.75A2.75 2.75 0 0015.25 4H4.75zM18 9H2v4.25A2.75 2.75 0 004.75 16h10.5A2.75 2.75 0 0018 13.25V9zm-4.5 4h2a.5.5 0 010 1h-2a.5.5 0 010-1z" />
		</svg>
	)
}
export default PaymentIcon
