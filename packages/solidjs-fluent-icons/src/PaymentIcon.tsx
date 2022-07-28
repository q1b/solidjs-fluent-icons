import { splitProps, ComponentProps, JSX } from "solid-js"

function PaymentIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.5 13a.5.5 0 000 1h2a.5.5 0 000-1h-2zM2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zM4.75 5C3.78 5 3 5.78 3 6.75V8h14V6.75C17 5.78 16.22 5 15.25 5H4.75zM17 9H3v4.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75V9z" />
		</svg>
	)
}
export default PaymentIcon
