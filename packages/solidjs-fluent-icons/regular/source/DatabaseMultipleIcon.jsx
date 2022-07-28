import { splitProps } from "solid-js"
function DatabaseMultipleIcon(props) {
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
			<path d="M7.9 1.78C6.88 2.24 6 2.99 6 4v3.01a9.16 9.16 0 011 0V5.7c.27.2.58.38.9.52 1.08.5 2.53.78 4.1.78 1.57 0 3.02-.29 4.1-.78.32-.14.63-.32.9-.52V14c0 .37-.36.88-1.32 1.31-.91.42-2.22.69-3.68.69v.5c0 .17-.02.34-.05.5H12c1.57 0 3.02-.29 4.1-.78 1.02-.46 1.9-1.21 1.9-2.22V4c0-1-.88-1.76-1.9-2.22A10.17 10.17 0 0012 1c-1.57 0-3.02.29-4.1.78zm.42 3.53C7.36 4.88 7 4.37 7 4c0-.37.36-.88 1.32-1.31A9.19 9.19 0 0112 2c1.46 0 2.77.27 3.68.69.96.43 1.32.94 1.32 1.31 0 .37-.36.88-1.32 1.31-.91.42-2.22.69-3.68.69a9.19 9.19 0 01-3.68-.69zM7 8.01a7.68 7.68 0 012 .41c1.2.45 2 1.21 2 2.08 0 1.38-2.01 2.5-4.5 2.5S2 11.88 2 10.5c0-1.29 1.75-2.35 4-2.48a8.16 8.16 0 011 0zm3.93 8.94C10.54 18.12 8.7 19 6.5 19 4.01 19 2 17.88 2 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85s2.68-.3 3.67-.86c.29-.16.58-.36.83-.59v3.95c0 .15-.03.3-.07.45z" />
		</svg>
	)
}
export default DatabaseMultipleIcon
