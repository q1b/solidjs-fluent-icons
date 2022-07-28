import { splitProps, ComponentProps, JSX } from "solid-js"

function BranchIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 5a3 3 0 01-2.15 2.88A5.76 5.76 0 0012 9.98a3 3 0 11.17 1.01A6.8 6.8 0 017.5 9v3.05a3 3 0 11-1 0V7.96A3 3 0 1110 5zM7 7a2 2 0 100-4 2 2 0 000 4zm10 3a2 2 0 10-4 0 2 2 0 004 0zM7 17a2 2 0 100-4 2 2 0 000 4z" />
		</svg>
	)
}
export default BranchIcon
