import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowMultipleSwapIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 4.5A2.5 2.5 0 014.5 2h8A2.5 2.5 0 0115 4.5v8a2.5 2.5 0 01-2.5 2.5h-1.59a1.5 1.5 0 000-1h1.59c.83 0 1.5-.67 1.5-1.5V6H3v5.09c-.2.07-.4.19-.56.35l-.44.44V4.5zm1 0V5h11v-.5c0-.83-.67-1.5-1.5-1.5h-8C3.67 3 3 3.67 3 4.5zM14 18H7.5c.38 0 .77-.15 1.06-.44l.56-.56H14a3 3 0 003-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 012 2.45V14a4 4 0 01-4 4zm-4.15-3.15l-2 2a.5.5 0 01-.7-.7L8.29 15H2.71l1.14 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L2.71 14H8.3l-1.15-1.15a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7zM3.25 14h1.32" />
		</svg>
	)
}
export default WindowMultipleSwapIcon
