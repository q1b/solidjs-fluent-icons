import { splitProps } from "solid-js"
function HardDriveIcon(props) {
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
			<path d="M14.25 13.5a.75.75 0 100-1.5.75.75 0 000 1.5zM2.24 10.84C2.08 11.21 2 11.6 2 12v2c0 1.1.9 2 2 2h12a2 2 0 002-2v-2c0-.38-.06-.77-.19-1.14a54.93 54.93 0 00-2.45-5.77A1.96 1.96 0 0013.59 4H6.5a2 2 0 00-1.84 1.21l-2.41 5.63zM6.49 5h7.1c.38 0 .7.2.87.53.47.95 1.27 2.65 1.99 4.52-.15-.03-.3-.05-.45-.05H4c-.11 0-.22 0-.32.03L5.57 5.6A1 1 0 016.49 5zM17 14a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h12a1 1 0 011 1v2z" />
		</svg>
	)
}
export default HardDriveIcon
