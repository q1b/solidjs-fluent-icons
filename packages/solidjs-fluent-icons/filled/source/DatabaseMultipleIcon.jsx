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
			<path d="M18 4c0 1.66-2.69 3-6 3S6 5.66 6 4s2.69-3 6-3 6 1.34 6 3zm0 2.12c-.38.36-.84.66-1.31.9-1.25.62-2.91.98-4.69.98-.62 0-1.23-.04-1.81-.13.93.53 1.72 1.34 1.8 2.44H12v6.19c0 .17-.02.34-.05.5H12c3.31 0 6-1.34 6-3V6.12zm-10.69.9l.05.02A9.08 9.08 0 006 7.01v-.89c.38.36.84.66 1.31.9zM9 8.42A7.86 7.86 0 006.5 8C4.01 8 2 9.12 2 10.5S4.01 13 6.5 13s4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08zm1.17 4.72c-1 .55-2.29.86-3.67.86s-2.68-.3-3.67-.86c-.29-.16-.58-.36-.83-.59v3.95C2 17.88 4.01 19 6.5 19s4.5-1.12 4.5-2.5v-3.95c-.25.23-.54.43-.83.6z" />
		</svg>
	)
}
export default DatabaseMultipleIcon
