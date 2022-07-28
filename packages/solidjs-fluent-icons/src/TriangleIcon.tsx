import { splitProps, ComponentProps, JSX } from "solid-js"

function TriangleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.5 18a1.5 1.5 0 01-1.32-2.2l7.4-14a1.5 1.5 0 012.64-.02l7.6 14A1.5 1.5 0 0117.5 18h-15zm-.44-1.73a.5.5 0 00.44.73h15a.5.5 0 00.44-.74l-7.6-14a.5.5 0 00-.89 0l-7.39 14z" />
		</svg>
	)
}
export default TriangleIcon
