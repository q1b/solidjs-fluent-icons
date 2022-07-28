import { splitProps, ComponentProps, JSX } from "solid-js"

function LockMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 3a2 2 0 012 2v1H7V5c0-1.1.9-2 2-2zM6 5v1h-.5C4.67 6 4 6.67 4 7.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H12V5a3 3 0 10-6 0zM5 7.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v6a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-6zM7.5 17a1.5 1.5 0 01-1.41-1h6.41a2.5 2.5 0 002.5-2.5V8.09c.58.2 1 .76 1 1.41v4a3.5 3.5 0 01-3.5 3.5h-5zM9 11.5a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default LockMultipleIcon
