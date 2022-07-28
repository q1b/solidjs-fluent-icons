import { splitProps, ComponentProps, JSX } from "solid-js"

function UninstallAppIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 17A1.5 1.5 0 013 15.5v-11C3 3.67 3.67 3 4.5 3H9c.83 0 1.5.67 1.5 1.5v5h5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-11zm11-6.5h-5V16h5a.5.5 0 00.5-.5V11a.5.5 0 00-.5-.5zm-6 0H4v5c0 .28.22.5.5.5h5v-5.5zm0-1v-5A.5.5 0 009 4H4.5a.5.5 0 00-.5.5v5h5.5zm4.35-2.65a.5.5 0 01-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 01.7-.7l1.65 1.64 1.65-1.64a.5.5 0 01.7.7L16.21 4.5l1.64 1.65a.5.5 0 01-.7.7L15.5 5.21l-1.65 1.64z" />
		</svg>
	)
}
export default UninstallAppIcon
