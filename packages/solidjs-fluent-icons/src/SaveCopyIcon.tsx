import { splitProps, ComponentProps, JSX } from "solid-js"

function SaveCopyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.5 6.5a.5.5 0 00-1 0v2h-2a.5.5 0 000 1h2v2a.5.5 0 001 0v-2h2a.5.5 0 000-1h-2v-2zM4.5 2A2.5 2.5 0 002 4.5v9A2.5 2.5 0 004.5 16h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0013.5 2h-9zM3 4.5C3 3.67 3.67 3 4.5 3h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 013 13.5v-9zM7.5 18c-.95 0-1.82-.38-2.45-1h9.45a2.5 2.5 0 002.5-2.5V5.05c.62.63 1 1.5 1 2.45v7a3.5 3.5 0 01-3.5 3.5h-7z" />
		</svg>
	)
}
export default SaveCopyIcon
