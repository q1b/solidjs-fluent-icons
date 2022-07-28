import { splitProps, ComponentProps, JSX } from "solid-js"

function TextColumnTwoLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 5.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-6 3c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-6 3c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-6 3c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default TextColumnTwoLeftIcon
