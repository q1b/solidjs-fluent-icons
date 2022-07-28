import { splitProps } from "solid-js"
function ArrowStepInRightIcon(props) {
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
			<path d="M16 8a2 2 0 110 4 2 2 0 010-4zM2 10c0-.28.22-.5.5-.5h7.8L7.14 6.35a.5.5 0 11.7-.7l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7-.7l3.14-3.15H2.5A.5.5 0 012 10z" />
		</svg>
	)
}
export default ArrowStepInRightIcon
