import { splitProps, ComponentProps, JSX } from "solid-js"

function TableSearchIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v3.76c.32-.12.66-.2 1-.23V8h3v1.76a4.51 4.51 0 011 .91V8h4v4H8.74a4.5 4.5 0 01.23 1H12v3H9.12l1 1h4.38a2.5 2.5 0 002.5-2.5v-9zM14.5 16H13v-3h3V14.64A1.5 1.5 0 0114.5 16zM13 8h3v4h-3V8zm-1-1H8V4h4v3zm1-3h1.65A1.5 1.5 0 0116 5.5V7h-3V4zM4 7V5.36A1.5 1.5 0 015.5 4H7v3H4zm-2.62 4.9a3.5 3.5 0 005.22 4.4l2.54 2.56a.5.5 0 00.71-.71L7.3 15.6a3.5 3.5 0 10-5.92-3.7zm5.2.21a2.5 2.5 0 11-4.16 2.78 2.5 2.5 0 014.16-2.78z" />
		</svg>
	)
}
export default TableSearchIcon
