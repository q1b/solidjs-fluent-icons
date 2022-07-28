import { splitProps, ComponentProps, JSX } from "solid-js"

function ClipboardTextIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
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
			<path d="M11 12a1 1 0 100 2h10a1 1 0 100-2H11zm-1 6a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm1 4a1 1 0 100 2h8a1 1 0 100-2h-8zM21.83 4A3 3 0 0019 2h-6a3 3 0 00-2.83 2H8.5A3.5 3.5 0 005 7.5v19A3.5 3.5 0 008.5 30h15a3.5 3.5 0 003.5-3.5v-19A3.5 3.5 0 0023.5 4h-1.67zM12 5a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zM7 7.5C7 6.67 7.67 6 8.5 6h1.67A3 3 0 0013 8h6a3 3 0 002.83-2h1.67c.83 0 1.5.67 1.5 1.5v19c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 017 26.5v-19z" />
		</svg>
	)
}
export default ClipboardTextIcon
