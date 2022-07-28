import { splitProps, ComponentProps, JSX } from "solid-js"

function TabDesktopMultipleBottomIcon(
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
			<path d="M6.09 4H5.05A2.5 2.5 0 017.5 2H14a4 4 0 014 4v6.5a2.5 2.5 0 01-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 00-3-3H7.5c-.65 0-1.2.42-1.41 1zM9.5 15H3v.5c0 .83.67 1.5 1.5 1.5H10v-1.5a.5.5 0 00-.5-.5zM3 14h6.5c.83 0 1.5.67 1.5 1.5V17h1.5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-8C3.67 6 3 6.67 3 7.5V14zm1.5 4A2.5 2.5 0 012 15.5v-8A2.5 2.5 0 014.5 5h8A2.5 2.5 0 0115 7.5v8a2.5 2.5 0 01-2.5 2.5h-8z" />
		</svg>
	)
}
export default TabDesktopMultipleBottomIcon
