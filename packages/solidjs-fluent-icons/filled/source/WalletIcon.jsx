import { splitProps } from "solid-js"
function WalletIcon(props) {
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
			<path d="M4.5 3C3.67 3 3 3.67 3 4.5v10A2.5 2.5 0 005.5 17H15a2 2 0 002-2V7a2 2 0 00-1-1.73V5a2 2 0 00-2-2H4.5zM15 5H4.5a.5.5 0 010-1H14a1 1 0 011 1zm-1.5 6h1a.5.5 0 010 1h-1a.5.5 0 010-1z" />
		</svg>
	)
}
export default WalletIcon
