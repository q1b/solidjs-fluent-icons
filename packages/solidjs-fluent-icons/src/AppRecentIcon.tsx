import { splitProps, ComponentProps, JSX } from "solid-js"

function AppRecentIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 2a2 2 0 00-2 2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1c0 1.1.9 2 2 2h6a2 2 0 002-2h1a2 2 0 002-2V6a2 2 0 00-2-2h-1a2 2 0 00-2-2H7zm8 3h1a1 1 0 011 1v8a1 1 0 01-1 1h-1V5zM5 15H4a1 1 0 01-1-1V6a1 1 0 011-1h1v10zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" />
		</svg>
	)
}
export default AppRecentIcon
