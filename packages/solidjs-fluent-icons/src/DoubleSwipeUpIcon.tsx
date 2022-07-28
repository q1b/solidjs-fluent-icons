import { splitProps, ComponentProps, JSX } from "solid-js"

function DoubleSwipeUpIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.85 2.15a.5.5 0 00-.7 0l-3 3a.5.5 0 10.7.7L5 3.71V14.5a.5.5 0 001 0V3.7l2.15 2.15a.5.5 0 10.7-.7l-3-3zm9 0a.5.5 0 00-.7 0l-3 3a.5.5 0 00.7.7L14 3.71V14.5a.5.5 0 001 0V3.7l2.15 2.15a.5.5 0 00.7-.7l-3-3zM11 14.5c0-1.4.82-2.6 2-3.16v1.16a2.5 2.5 0 103 0v-1.16a3.5 3.5 0 11-5 3.16zm-7-3.16a3.5 3.5 0 103 0v1.16a2.5 2.5 0 11-3 0v-1.16z" />
		</svg>
	)
}
export default DoubleSwipeUpIcon
