import { splitProps } from "solid-js"
function PeopleSwapIcon(props) {
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
			<path d="M10 6.75a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm1.35 4.78l-1.91 1.9a1.5 1.5 0 000 2.13l.65.65a6.3 6.3 0 01-3.34.79C1.5 17 1.5 13 1.5 13c0-1.1.9-2 2-2H10a2 2 0 011.35.53zM14.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-1.65 2.85a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L11.71 15h5.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L17.29 14h-5.58l1.14-1.15z" />
		</svg>
	)
}
export default PeopleSwapIcon
