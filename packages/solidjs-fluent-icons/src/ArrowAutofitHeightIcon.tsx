import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowAutofitHeightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M15 3.63l1.14 1.18a.5.5 0 10.72-.7l-1.82-1.88a.75.75 0 00-1.08 0L12.14 4.1a.5.5 0 10.72.7L14 3.63V7.5a.5.5 0 001 0V3.63zM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 010 1H5a1 1 0 00-1 1v10a1 1 0 001 1h4.5a.5.5 0 010 1H5a2 2 0 01-2-2V5zm13.14 10.2L15 16.36V12.5a.5.5 0 10-1 0v3.87l-1.14-1.18a.5.5 0 10-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 10-.72-.7z" />
		</svg>
	)
}
export default ArrowAutofitHeightIcon
