import { splitProps, ComponentProps, JSX } from "solid-js"

function BorderLeftRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.66 3.07a.5.5 0 00-.66.38.5.5 0 00.46.6A2 2 0 0116 6v8a2 2 0 01-1.6 1.95.5.5 0 00-.4.6.5.5 0 00.66.38A3 3 0 0017 14V6a3 3 0 00-2.34-2.93zm-9.32 0a.5.5 0 01.66.38.5.5 0 01-.46.6A2 2 0 004 6v8a2 2 0 001.6 1.95.5.5 0 01.4.6.5.5 0 01-.66.38A3 3 0 013 14V6a3 3 0 012.34-2.93zM8 16.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
		</svg>
	)
}
export default BorderLeftRightIcon
