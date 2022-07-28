import { splitProps, ComponentProps, JSX } from "solid-js"

function SplitVerticalIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 2.5a.5.5 0 00-1 0v15a.5.5 0 001 0v-15zM4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h4v-1H4a1 1 0 01-1-1V6a1 1 0 011-1h4V4H4zm7 0v1h4a1 1 0 011 1v8a1 1 0 01-1 1h-4v1h4a2 2 0 002-2V6a2 2 0 00-2-2h-4z" />
		</svg>
	)
}
export default SplitVerticalIcon
