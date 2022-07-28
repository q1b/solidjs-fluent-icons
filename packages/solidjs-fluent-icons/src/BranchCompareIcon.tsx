import { splitProps, ComponentProps, JSX } from "solid-js"

function BranchCompareIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.15 6.85a.5.5 0 00.7-.7L10.71 5h1.79A2.5 2.5 0 0115 7.5V12a3 3 0 101 .17V7.5A3.5 3.5 0 0012.5 4h-1.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2zM17 15a2 2 0 11-4 0 2 2 0 014 0zM8 5a3 3 0 01-3 3v4.5A2.5 2.5 0 007.5 15h1.8l-1.15-1.15a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L9.29 16H7.5A3.5 3.5 0 014 12.5V7.83A3 3 0 118 5zM7 5a2 2 0 10-4 0 2 2 0 004 0z" />
		</svg>
	)
}
export default BranchCompareIcon
