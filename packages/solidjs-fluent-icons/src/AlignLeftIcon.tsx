import { splitProps, ComponentProps, JSX } from "solid-js"

function AlignLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.5 2a.5.5 0 00-.5.5v15a.5.5 0 001 0v-15a.5.5 0 00-.5-.5zM7 11a2 2 0 00-2 2v1c0 1.1.9 2 2 2h5a2 2 0 002-2v-1a2 2 0 00-2-2H7zm-1 2a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1zM5 6c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H7z" />
		</svg>
	)
}
export default AlignLeftIcon
