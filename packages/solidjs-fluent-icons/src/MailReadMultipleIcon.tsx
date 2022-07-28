import { splitProps, ComponentProps, JSX } from "solid-js"

function MailReadMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.26 2.07a.5.5 0 00-.52 0L2.7 5.78A1.5 1.5 0 002 7.06v5.44A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5V7.06c0-.52-.27-1-.71-1.28l-6.03-3.7zM3.46 6.5L9 3.09l5.55 3.41L9 9.91 3.45 6.5zM3 7.4l5.74 3.53c.16.1.36.1.52 0L15 7.39v5.11c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 013 12.5V7.4zM6.5 17a2.5 2.5 0 01-2-1H14a3 3 0 003-3V7.06c0-.16-.02-.33-.05-.48l.34.2c.44.27.71.76.71 1.28V13a4 4 0 01-4 4H6.5z" />
		</svg>
	)
}
export default MailReadMultipleIcon
