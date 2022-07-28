import { splitProps, ComponentProps, JSX } from "solid-js"

function WalletCreditCardIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 1.64a1.5 1.5 0 012.18-.3l3.27 2.65c.6.5.73 1.37.3 2h-1.23l.4-.55a.5.5 0 00-.1-.67L13.13 3.4 11.33 6h-1.2l2.22-3.23-.8-.66a.5.5 0 00-.73.1L8.18 6H6.96L10 1.64zM13.5 12a.5.5 0 000 1h1a.5.5 0 000-1h-1zm-9-7h2.17l-.7 1H4.5a.5.5 0 000 1H15a2 2 0 012 2v6a2 2 0 01-2 2H5.5A2.5 2.5 0 013 14.5v-8C3 5.67 3.67 5 4.5 5zM4 14.5c0 .83.67 1.5 1.5 1.5H15a1 1 0 001-1V9a1 1 0 00-1-1H4.5a1.5 1.5 0 01-.5-.09v6.59z" />
		</svg>
	)
}
export default WalletCreditCardIcon
