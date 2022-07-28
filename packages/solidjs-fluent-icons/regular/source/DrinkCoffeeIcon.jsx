import { splitProps } from "solid-js"
function DrinkCoffeeIcon(props) {
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
			<path d="M3.17 3.97C2.52 3.97 2 4.49 2 5.14V10a6 6 0 0011.92 1H15a3 3 0 100-6h-1a1.17 1.17 0 00-1.17-1.03H3.17zM3 5.14c0-.1.08-.17.17-.17h9.66c.1 0 .17.07.17.17V10a5 5 0 01-10 0V5.14zM14 6h1a2 2 0 110 4h-1V6z" />
		</svg>
	)
}
export default DrinkCoffeeIcon
