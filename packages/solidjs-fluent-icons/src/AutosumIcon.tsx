import { splitProps, ComponentProps, JSX } from "solid-js"

function AutosumIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.04 3.8a.5.5 0 01.46-.3h11a.5.5 0 110 1H5.67l4.56 4.73a.5.5 0 01.02.67l-4.68 5.6h9.93a.5.5 0 110 1h-11a.5.5 0 01-.38-.82L9.2 9.6 4.14 4.35a.5.5 0 01-.1-.55z" />
		</svg>
	)
}
export default AutosumIcon
