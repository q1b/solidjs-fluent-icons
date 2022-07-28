import { splitProps, ComponentProps, JSX } from "solid-js"

function HistoryDismissIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.5 2h.1c.2.04.36.2.4.4V4.7a8 8 0 0114 5.55 5.5 5.5 0 00-1-.65A7 7 0 004.26 6h2.82a.5.5 0 010 .99H3.41a.5.5 0 01-.4-.4V2.4a.5.5 0 01.4-.4l.1-.01zm6.1 14.99c.18.36.4.7.65 1a8 8 0 01-8.24-8.51.5.5 0 111 .04 7 7 0 006.59 7.47zm.66-5.99c.31-.38.67-.72 1.08-1H10V6.4a.5.5 0 00-.4-.4H9.4a.5.5 0 00-.4.4V10.6c.04.2.2.36.4.4l.1.01h.75zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" />
		</svg>
	)
}
export default HistoryDismissIcon
