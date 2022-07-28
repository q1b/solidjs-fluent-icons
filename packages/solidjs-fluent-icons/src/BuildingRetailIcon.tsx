import { splitProps, ComponentProps, JSX } from "solid-js"

function BuildingRetailIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 7a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-9zm.5 3V8h8v2H6zm5.5 2a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-3zm.5 2v-1h2v1h-2zM2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 01.5 2.91V16.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V5.91c-.58-.2-1-.76-1-1.41zM3.5 4a.5.5 0 000 1h13a.5.5 0 000-1h-13zM4 6v10h1v-3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V16h6V6H4zm2 10h3v-3H6v3z" />
		</svg>
	)
}
export default BuildingRetailIcon
