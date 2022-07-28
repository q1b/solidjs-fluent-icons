import { splitProps, ComponentProps, JSX } from "solid-js"

function CutIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.92 2.23a.5.5 0 00-.84.54L9.4 9.43l-1.92 2.96a3 3 0 10.78.64L10 10.35l1.74 2.68a3 3 0 10.78-.64L5.92 2.23zM14 17a2 2 0 110-4 2 2 0 010 4zM4 15a2 2 0 114 0 2 2 0 01-4 0zm7.2-6.49l-.6-.92 3.48-5.36a.5.5 0 01.84.54l-3.73 5.74z" />
		</svg>
	)
}
export default CutIcon
