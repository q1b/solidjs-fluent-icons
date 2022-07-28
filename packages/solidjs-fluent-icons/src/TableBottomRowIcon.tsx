import { splitProps, ComponentProps, JSX } from "solid-js"

function TableBottomRowIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4zm4 3h4v-3H8v3zm5 0h1.5c.78 0 1.42-.6 1.5-1.36V13h-3v3zm3-4V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36V12h12z" />
		</svg>
	)
}
export default TableBottomRowIcon
