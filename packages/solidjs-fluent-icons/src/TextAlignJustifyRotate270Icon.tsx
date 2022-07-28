import { splitProps, ComponentProps, JSX } from "solid-js"

function TextAlignJustifyRotate270Icon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M4.5 18a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zm5 0a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zm4.5-.5a.5.5 0 001 0v-15a.5.5 0 00-1 0v15z" />
		</svg>
	)
}
export default TextAlignJustifyRotate270Icon
