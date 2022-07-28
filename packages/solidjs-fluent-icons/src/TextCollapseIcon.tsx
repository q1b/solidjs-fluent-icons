import { splitProps, ComponentProps, JSX } from "solid-js"

function TextCollapseIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 3.5c0-.28.22-.5.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 12c0-.28.22-.5.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm6-8c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 4c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-2-2a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3.5 9a.5.5 0 000 1h4a.5.5 0 000-1h-4z" />
		</svg>
	)
}
export default TextCollapseIcon
