import { splitProps, ComponentProps, JSX } from "solid-js"

function SmartwatchDotIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-3 .68A2 2 0 0012 2H8a2 2 0 00-2 2v1.27A2 2 0 005 7v6a2 2 0 001 1.73V16c0 1.1.9 2 2 2h4a2 2 0 002-2v-1.27A2 2 0 0015 13v-2a1 1 0 001-1V9a1 1 0 00-1-1v-.34a3.5 3.5 0 01-1-.71A1 1 0 0114 7v6a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h6a1 1 0 01.37.07 3.49 3.49 0 01.14-3.39zM13 4.5V5H7V4a1 1 0 011-1h4a1 1 0 011 1v.5zM7 15h6v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1z" />
		</svg>
	)
}
export default SmartwatchDotIcon
