import { splitProps, ComponentProps, JSX } from "solid-js"

function FormMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 6a.5.5 0 000 1h7a.5.5 0 000-1h-7z" />
			<path d="M6.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1z" />
			<path d="M9.5 10a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
			<path d="M3 6a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2H6z" />
			<path d="M8 17a3 3 0 01-2.24-1h6.74a3.5 3.5 0 003.5-3.5V5.76A3 3 0 0117 8v4.5a4.5 4.5 0 01-4.5 4.5H8z" />
		</svg>
	)
}
export default FormMultipleIcon
