import { splitProps, ComponentProps, JSX } from "solid-js"

function CommunicationIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 4a7 7 0 00-4.95 11.95.5.5 0 01-.7.7 8 8 0 1111.32 0 .5.5 0 01-.72-.7A7 7 0 0010 4zm0 3a4 4 0 00-2.83 6.82.5.5 0 11-.71.71A4.99 4.99 0 0110 6a5 5 0 013.54 8.53.5.5 0 01-.71-.7A3.99 3.99 0 0010 7zm0 2a2 2 0 100 4 2 2 0 000-4zm-1 2a1 1 0 112 0 1 1 0 01-2 0z" />
		</svg>
	)
}
export default CommunicationIcon
