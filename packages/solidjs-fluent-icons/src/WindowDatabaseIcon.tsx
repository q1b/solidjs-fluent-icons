import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowDatabaseIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v1H4v7c0 1.1.9 2 2 2h3v.5c0 .17.02.34.05.5H6a3 3 0 01-3-3V6zm13 2.14c-.47-.09-.97-.14-1.5-.14-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08-.3-.11-.64-.2-1-.28zM6 4a2 2 0 00-2 2h12a2 2 0 00-2-2H6zm8.5 10c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85z" />
		</svg>
	)
}
export default WindowDatabaseIcon
