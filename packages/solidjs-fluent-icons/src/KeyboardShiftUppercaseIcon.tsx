import { splitProps, ComponentProps, JSX } from "solid-js"

function KeyboardShiftUppercaseIcon(
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
			<path d="M11.14 2.53a1.5 1.5 0 00-2.28 0l-6.62 7.8A1 1 0 003 11.98h3V15a1 1 0 001 1h6a1 1 0 001-1v-3.02h3a1 1 0 00.76-1.65l-6.62-7.8zm-1.52.65a.5.5 0 01.76 0l6.62 7.8h-3.5a.5.5 0 00-.5.5V15H7v-3.52a.5.5 0 00-.5-.5H3l6.62-7.8zM6.5 17a.5.5 0 100 1h7a.5.5 0 000-1h-7z" />
		</svg>
	)
}
export default KeyboardShiftUppercaseIcon
