import { splitProps, ComponentProps, JSX } from "solid-js"

function TextPeriodAsteriskIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12 4.5a.5.5 0 00-1 0v2.46L8.65 6.2a.5.5 0 00-.3.95l2.34.76-1.45 2a.5.5 0 10.8.59l1.46-2 1.45 2a.5.5 0 00.8-.59l-1.44-2 2.34-.76a.5.5 0 00-.3-.95L12 6.96V4.5zM6 16a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default TextPeriodAsteriskIcon
