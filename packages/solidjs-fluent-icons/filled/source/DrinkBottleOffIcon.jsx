import { splitProps } from "solid-js"
function DrinkBottleOffIcon(props) {
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
			<path d="M15 15.7l2.15 2.15a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7L6.28 7a4.24 4.24 0 00-1.27 3.29L5 10.5v5a2.5 2.5 0 003.75 2.17 2.49 2.49 0 002.5 0 2.49 2.49 0 003.74-1.97zM6 15h8v.5a1.5 1.5 0 01-2.44 1.17.5.5 0 00-.62 0 1.5 1.5 0 01-1.88 0 .5.5 0 00-.62 0A1.5 1.5 0 016 15.5V15zm9-4.5v2.38L9.12 7h3.25l-.05-.04c-.53-.53-1.1-1.1-1.27-1.96h-2.1c-.08.5-.3.9-.58 1.25l-.71-.71c.14-.2.24-.41.3-.64A1.5 1.5 0 018.5 2h3a1.5 1.5 0 01.55 2.9c.12.48.47.85 1.02 1.39l.01.01c.38.38.84.83 1.24 1.42l.02.05a4.14 4.14 0 01.65 2.51l.01.22zM8.5 4h3a.5.5 0 000-1h-3a.5.5 0 000 1z" />
		</svg>
	)
}
export default DrinkBottleOffIcon
