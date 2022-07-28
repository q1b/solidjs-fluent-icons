import { splitProps, ComponentProps, JSX } from "solid-js"

function SubtractCircleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 10c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7A.5.5 0 016 10zm4 8a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 110-14 7 7 0 010 14z" />
		</svg>
	)
}
export default SubtractCircleIcon
