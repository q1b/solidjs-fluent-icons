import { splitProps, ComponentProps, JSX } from "solid-js"

function CopyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H8zM7 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V4zM4 6a2 2 0 011-1.73V14.5A2.5 2.5 0 007.5 17h6.23A2 2 0 0112 18H7.5A3.5 3.5 0 014 14.5V6z" />
		</svg>
	)
}
export default CopyIcon
