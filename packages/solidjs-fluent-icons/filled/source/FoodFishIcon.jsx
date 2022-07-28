import { splitProps } from "solid-js"
function FoodFishIcon(props) {
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
			<path d="M8.63 3.7c-1.5 1.5-1.76 3.87-1.72 5.67a.4.4 0 01-.37.41c-1.52.1-3.39.41-4.92 1.23-.52.27-.7.8-.58 1.27.12.45.5.83 1.02.92.7.14 1.5.3 2.18.52.35.1.65.21.9.33.26.12.42.22.5.3.09.09.2.25.31.5.12.26.23.57.33.91.21.69.38 1.48.51 2.18.1.52.47.9.93 1.02.47.13 1-.06 1.27-.57.82-1.54 1.12-3.4 1.23-4.93a.4.4 0 01.4-.37c1.8.05 4.19-.22 5.69-1.72.89-.9 1.33-2.08 1.54-3.25.2-1.17.17-2.37.08-3.32a3 3 0 00-2.73-2.73 12.7 12.7 0 00-3.32.08c-1.17.2-2.35.65-3.25 1.54zm4.62.8a.75.75 0 110 1.5.75.75 0 010-1.5z" />
		</svg>
	)
}
export default FoodFishIcon
