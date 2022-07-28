import { splitProps } from "solid-js"
function WalletCreditCardIcon(props) {
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
			<path d="M12.18 1.34a1.5 1.5 0 00-2.18.3L6.96 6h1.22l2.64-3.79a.5.5 0 01.73-.1l.8.66L10.12 6h1.22l1.8-2.6 1.68 1.37c.2.16.24.46.1.67l-.4.56h1.22a1.5 1.5 0 00-.3-2.01l-3.26-2.65zM4.5 5C3.67 5 3 5.67 3 6.5v8A2.5 2.5 0 005.5 17H15a2 2 0 002-2V9a2 2 0 00-2-2H4.5a.5.5 0 010-1h1.47l.7-1H4.5zm9 7h1a.5.5 0 010 1h-1a.5.5 0 010-1z" />
		</svg>
	)
}
export default WalletCreditCardIcon
