import { splitProps, ComponentProps, JSX } from "solid-js"

function ClassIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 4a2 2 0 011-1.73V16a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1h-2V2h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-2v6.5a.5.5 0 00.8.4l1.7-1.28 1.7 1.28a.5.5 0 00.8-.4V2H6zm1 5.5V3h3v4.5l-1.2-.9a.5.5 0 00-.6 0L7 7.5z" />
		</svg>
	)
}
export default ClassIcon
