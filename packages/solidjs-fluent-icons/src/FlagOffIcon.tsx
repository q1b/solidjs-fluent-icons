import { splitProps, ComponentProps, JSX } from "solid-js"

function FlagOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21V17.5a.5.5 0 001 0V13h7.8l4.85 4.85a.5.5 0 00.7-.7L3.77 3.05l-.92-.9zM11.3 12H4.5V5.2l6.8 6.8zm3.28 0h-.45l1 1h.38a.5.5 0 00.42-.78L13.1 8l2.82-4.22A.5.5 0 0015.5 3H5.12l1 1h8.45l-2.49 3.72a.5.5 0 000 .56L14.57 12z" />
		</svg>
	)
}
export default FlagOffIcon
