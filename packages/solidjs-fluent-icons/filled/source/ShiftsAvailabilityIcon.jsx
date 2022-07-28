import { splitProps } from "solid-js"
function ShiftsAvailabilityIcon(props) {
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
			<path d="M6 12.92A7 7 0 0112.92 6 6 6 0 106 12.92zm3.35-8.27c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 11.7-.7L6 7.29l2.65-2.64c.2-.2.5-.2.7 0zM13 19a6 6 0 100-12 6 6 0 000 12zm-1.65-8.35L13 12.29l1.65-1.64a.5.5 0 01.7.7L13.71 13l1.64 1.65a.5.5 0 01-.7.7L13 13.71l-1.65 1.64a.5.5 0 01-.7-.7L12.29 13l-1.64-1.65a.5.5 0 01.7-.7z" />
		</svg>
	)
}
export default ShiftsAvailabilityIcon
