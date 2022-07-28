import { splitProps } from "solid-js"
function HomeDatabaseIcon(props) {
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
			<path d="M9 2.39a1.5 1.5 0 012 0l5.35 4.8A8.7 8.7 0 0014.64 7l-4.3-3.87a.5.5 0 00-.67 0l-5.5 4.94a.5.5 0 00-.17.38v7.05c0 .28.22.5.5.5H9v.5c0 .17.02.34.05.5H4.5A1.5 1.5 0 013 15.5V8.45c0-.43.18-.84.5-1.12L9 2.39zm6.88 5.73c.4.07.78.17 1.12.3 1.2.45 2 1.21 2 2.08 0 1.38-2.01 2.5-4.5 2.5S10 11.88 10 10.5 12.01 8 14.5 8c.48 0 .94.04 1.38.12zM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85z" />
		</svg>
	)
}
export default HomeDatabaseIcon
