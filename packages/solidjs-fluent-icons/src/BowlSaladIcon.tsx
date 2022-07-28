import { splitProps, ComponentProps, JSX } from "solid-js"

function BowlSaladIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.92 4.83a3.5 3.5 0 016.25.17 3.75 3.75 0 00-3.39 2.32 6.15 6.15 0 00-2.86-2.49zM17 9a3.76 3.76 0 00-2.7-3.85A4.5 4.5 0 006 4.48 10.07 10.07 0 003.14 4a9.5 9.5 0 00-.67 0 .5.5 0 00-.47.47 4.84 4.84 0 000 .67c.01.41.05.98.17 1.62.12.68.33 1.46.68 2.23H2.5a.5.5 0 00-.5.5v.5a8 8 0 1016 0v-.5a.5.5 0 00-.5-.5H17zM4 9a7.87 7.87 0 01-.83-2.4A10.47 10.47 0 013 5a9.4 9.4 0 011.59.16c1.18.22 2.57.69 3.57 1.7A5.83 5.83 0 019.48 9H7.7L5.85 7.15a.5.5 0 10-.7.7L6.29 9H4zm6.54 0l-.02-.08-.01-.17a2.75 2.75 0 115.49.25h-5.46zM3 10h14a7 7 0 01-.29 2H3.29A7 7 0 013 10zm7 7a7 7 0 01-6.33-4h12.66A7 7 0 0110 17z" />
		</svg>
	)
}
export default BowlSaladIcon
