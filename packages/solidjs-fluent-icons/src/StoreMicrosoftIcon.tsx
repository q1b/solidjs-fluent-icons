import { splitProps, ComponentProps, JSX } from "solid-js"

function StoreMicrosoftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.5 7v3h-3V7h3zm0 7v-3h-3v3h3zm4-7v3h-3V7h3zm0 7v-3h-3v3h3zM7 4V2.5C7 1.67 7.67 1 8.5 1h3c.83 0 1.5.67 1.5 1.5V4h4.5c.28 0 .5.22.5.5v10a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-10c0-.28.22-.5.5-.5H7zm1-1.5V4h4V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zm-5 12c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V5H3v9.5z" />
		</svg>
	)
}
export default StoreMicrosoftIcon
