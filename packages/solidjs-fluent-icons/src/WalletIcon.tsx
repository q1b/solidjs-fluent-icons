import { splitProps, ComponentProps, JSX } from "solid-js"

function WalletIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1zM3 4.5C3 3.67 3.67 3 4.5 3H14a2 2 0 012 2v.27c.6.34 1 .99 1 1.73v8a2 2 0 01-2 2H5.5A2.5 2.5 0 013 14.5v-10zM14 4H4.5a.5.5 0 000 1H15a1 1 0 00-1-1zM4.5 6a1.5 1.5 0 01-.5-.09v8.59c0 .83.67 1.5 1.5 1.5H15a1 1 0 001-1V7a1 1 0 00-1-1H4.5z" />
		</svg>
	)
}
export default WalletIcon
