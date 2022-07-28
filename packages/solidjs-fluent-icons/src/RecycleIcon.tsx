import { splitProps, ComponentProps, JSX } from "solid-js"

function RecycleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.32 2.92a1.5 1.5 0 00-2.64 0L6.83 6.37a.5.5 0 11-.88-.47L7.8 2.45a2.5 2.5 0 014.4 0l2.01 3.74.3-1.77a.5.5 0 01.98.16l-.5 3a.5.5 0 01-.65.4l-3-1a.5.5 0 01.32-.95l1.62.54-1.96-3.65zm4.03 6.4a.5.5 0 00-.22.7l2.03 3.77c.54 1-.19 2.21-1.32 2.21H11.7l1.14-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L11.71 17h4.13a2.5 2.5 0 002.2-3.68l-2.03-3.78a.5.5 0 00-.66-.21zM4.16 16H7.5a.5.5 0 010 1H4.16a2.5 2.5 0 01-2.2-3.68l2.15-4-1.95.65a.5.5 0 11-.32-.94l3-1a.5.5 0 01.63.31l1 3a.5.5 0 01-.94.32l-.6-1.77-2.09 3.9A1.5 1.5 0 004.16 16z" />
		</svg>
	)
}
export default RecycleIcon
