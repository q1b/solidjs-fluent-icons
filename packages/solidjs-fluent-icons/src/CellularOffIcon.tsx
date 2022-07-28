import { splitProps, ComponentProps, JSX } from "solid-js"

function CellularOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L10 10.71v4.88a.5.5 0 001-.09v-3.8l2 2V15.6a.5.5 0 001-.09v-.8l3.15 3.15a.5.5 0 00.7-.7l-15-15zM13 10.88V6.5a.5.5 0 011-.09v5.47l-1-1zm3 3V4.5a.5.5 0 011-.09V14.88l-1-1zm-8-3.47a.5.5 0 00-1 .09v5l.01.09a.5.5 0 001-.09v-5L8 10.41zm-3 2a.5.5 0 00-1 .09v3.09a.5.5 0 001-.09v-3.09z" />
		</svg>
	)
}
export default CellularOffIcon
