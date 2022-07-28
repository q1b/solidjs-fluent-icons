import { splitProps, ComponentProps, JSX } from "solid-js"

function PhoneEraserIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.58 1.44a1.5 1.5 0 012.12 0l1.86 1.86a1.5 1.5 0 010 2.12l-5.14 5.14a1.5 1.5 0 01-2.12 0L9.44 8.7a1.5 1.5 0 010-2.12l5.14-5.14zm-4.43 5.84a.5.5 0 000 .71L12 9.85c.2.2.51.2.7 0l1.3-1.29L11.44 6l-1.3 1.3zm2.38-5.2A2 2 0 0012 2H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6a2 2 0 002-2v-4.61c-.3.26-.64.43-1 .53V16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h5.6l.93-.93zM7.5 14.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1H8a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default PhoneEraserIcon
