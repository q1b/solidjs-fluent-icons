import { splitProps, ComponentProps, JSX } from "solid-js"

function ReadingListIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 6.25a1.25 1.25 0 012.3-.7.5.5 0 10.82-.55 2.25 2.25 0 10-1.74 3.5H15.5a.5.5 0 000-1H4.38a.5.5 0 00-.06 0A1.25 1.25 0 013 6.25zM8.5 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm-3 5a.5.5 0 000 1h12a.5.5 0 000-1h-12zM2 13c0-.28.22-.5.5-.5h12a.5.5 0 010 1h-12A.5.5 0 012 13zm3.5 2a.5.5 0 000 1h12a.5.5 0 100-1h-12z" />
		</svg>
	)
}
export default ReadingListIcon
