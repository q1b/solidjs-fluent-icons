import { splitProps, ComponentProps, JSX } from "solid-js"

function ContractDownLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12.7 8l4.15-4.15a.5.5 0 00-.7-.7L12 7.29V3.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h5a.5.5 0 000-1h-3.8zM4 6c0-1.1.9-2 2-2h2.5a.5.5 0 000-1H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-2.5a.5.5 0 00-1 0V14a2 2 0 01-2 2h-4v-4a2 2 0 00-2-2H4V6zm0 5h4a1 1 0 011 1v4H6a2 2 0 01-2-2v-3z" />
		</svg>
	)
}
export default ContractDownLeftIcon
