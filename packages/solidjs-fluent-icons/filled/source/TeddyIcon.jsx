import { splitProps } from "solid-js"
function TeddyIcon(props) {
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
			<path d="M5.5 3a3.5 3.5 0 00-2.85 5.53 7.92 7.92 0 015.5-4.32A3.5 3.5 0 005.5 3zM18 6.5c0 .76-.24 1.46-.65 2.03a7.92 7.92 0 00-5.5-4.32A3.5 3.5 0 0118 6.5zm-15 5C3 7.87 6.17 5 10 5s7 2.87 7 6.5a6.2 6.2 0 01-1.76 4.31 5.5 5.5 0 00-10.48 0A6.2 6.2 0 013 11.5zm8.33 1.7a4.5 4.5 0 013.07 3.35A7.33 7.33 0 0110 18c-1.66 0-3.2-.54-4.4-1.45a4.5 4.5 0 013.07-3.35 1.5 1.5 0 002.66 0z" />
		</svg>
	)
}
export default TeddyIcon
