import { splitProps, ComponentProps, JSX } from "solid-js"

function CubeArrowCurveDownIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M1 5.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm6.4.89l-.9.9V5.74A2.75 2.75 0 003.75 3H3.5a.5.5 0 100 1h.25c.97 0 1.75.78 1.75 1.74V7.3l-.9-.9a.5.5 0 00-.7.7l1.75 1.76a.5.5 0 00.7 0L8.12 7.1a.5.5 0 10-.71-.71zM2 9.73c.3.26.64.48 1 .66v3.42c0 .2.12.39.31.46l5.76 2.3c.6.24 1.26.24 1.86 0l5.76-2.3a.5.5 0 00.31-.46V6.17a.5.5 0 00-.31-.46l-5.76-2.3a2.5 2.5 0 00-.4-.12 5.49 5.49 0 00-.6-1.06c.46-.01.93.07 1.37.25l5.76 2.3c.57.23.94.78.94 1.4v7.63a1.5 1.5 0 01-.94 1.39l-5.76 2.3a3.5 3.5 0 01-2.6 0l-5.76-2.3A1.5 1.5 0 012 13.8V9.74zm8.54-2.02A5.5 5.5 0 019.5 9.27v4.22a.5.5 0 001 0V8.82l4.2-1.87a.5.5 0 10-.4-.91L10.54 7.7z" />
		</svg>
	)
}
export default CubeArrowCurveDownIcon
