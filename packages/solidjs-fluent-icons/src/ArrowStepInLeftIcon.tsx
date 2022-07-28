import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowStepInLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 10a1 1 0 10-2 0 1 1 0 002 0zM4 8a2 2 0 110 4 2 2 0 010-4zm14 2a.5.5 0 01-.5.5H9.7l3.15 3.15a.5.5 0 01-.7.7l-4-4a.5.5 0 010-.7l4-4a.5.5 0 01.7.7L9.71 9.5h7.79c.28 0 .5.22.5.5z" />
		</svg>
	)
}
export default ArrowStepInLeftIcon
