import { splitProps, ComponentProps, JSX } from "solid-js"

function SelectAllOnIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 4c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H4zm2 15a2 2 0 01-1.73-1H14a3 3 0 003-3V4.27c.6.34 1 .99 1 1.73v8a4 4 0 01-4 4H6zm6.38-10.67a.5.5 0 00-.76-.66l-3.14 3.6-1.63-1.62a.5.5 0 10-.7.7l2 2a.5.5 0 00.73-.02l3.5-4z" />
		</svg>
	)
}
export default SelectAllOnIcon
