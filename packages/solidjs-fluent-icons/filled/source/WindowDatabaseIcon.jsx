import { splitProps } from "solid-js"
function WindowDatabaseIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.05a2.46 2.46 0 01-.05-.5V16H6a2 2 0 01-2-2V7h13V6a3 3 0 00-3-3H6zm11 5.42A7.81 7.81 0 0014.5 8C12.01 8 10 9.12 10 10.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08zM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85z" />
		</svg>
	)
}
export default WindowDatabaseIcon
