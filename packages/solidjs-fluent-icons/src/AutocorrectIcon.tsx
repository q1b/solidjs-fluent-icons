import { splitProps, ComponentProps, JSX } from "solid-js"

function AutocorrectIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.14 5.48a1 1 0 011.72 0L12.98 9h-.48a3.75 3.75 0 102.3 1h2.7a.5.5 0 000-1h-3.35l-2.44-4.03a2 2 0 00-3.42 0L2.07 15.24a.5.5 0 00.86.52L9.14 5.48zM12.25 10a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" />
		</svg>
	)
}
export default AutocorrectIcon
