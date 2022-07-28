import { splitProps, ComponentProps, JSX } from "solid-js"

function ServerMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM7 12.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5 4.5A2.5 2.5 0 017.5 2h5A2.5 2.5 0 0115 4.5V5h1a2 2 0 012 2v7a2 2 0 01-2 2h-1.05a2.5 2.5 0 01-2.45 2h-5a2.5 2.5 0 01-2.45-2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1v-.5zM15 15h1a1 1 0 001-1V7a1 1 0 00-1-1h-1v9zM5 6H4a1 1 0 00-1 1v7a1 1 0 001 1h1V6zm2.5-3C6.67 3 6 3.67 6 4.5v11c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-5z" />
		</svg>
	)
}
export default ServerMultipleIcon
