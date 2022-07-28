import { splitProps, ComponentProps, JSX } from "solid-js"

function TextBaselineIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.46 3.8a.5.5 0 00-.92 0l-4 9.5a.5.5 0 10.92.4L8.02 10h3.96l1.56 3.7a.5.5 0 10.92-.4l-4-9.5zm1.1 5.2H8.44L10 5.29 11.56 9z" />
			<path d="M2.5 16a.5.5 0 000 1h15a.5.5 0 000-1h-15z" />
		</svg>
	)
}
export default TextBaselineIcon
