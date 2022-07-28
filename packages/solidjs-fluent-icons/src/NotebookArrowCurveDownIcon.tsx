import { splitProps, ComponentProps, JSX } from "solid-js"

function NotebookArrowCurveDownIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M1 5.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm6.4.9l-.9.9V5.74A2.75 2.75 0 003.75 3H3.5a.5.5 0 100 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 00-.7.71l1.75 1.76a.5.5 0 00.7 0L8.12 7.1a.5.5 0 10-.71-.7zm-4.4 4c.31.16.65.3 1 .4V16a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1h-2.6a5.5 5.5 0 00-.66-1H13a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.6zM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm.5 3.5H16V12h.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13z" />
		</svg>
	)
}
export default NotebookArrowCurveDownIcon
