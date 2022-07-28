import { splitProps, ComponentProps, JSX } from "solid-js"

function TableImageIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h3.54a3.53 3.53 0 01-.04-.5V16H8v-3h1v-.5c0-.17.01-.34.04-.5H8V8h4v1.04c.16-.03.33-.04.5-.04h.5V8h3v1h.5c.17 0 .34.01.5.04V5.5zm-13 9V13h3v3H5.36A1.5 1.5 0 014 14.5zM12 7H8V4h4v3zm1-3H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM4 7V5.36A1.5 1.5 0 015.5 4H7v3H4zm3 1v4H4V8h3zm3 4.5a2.5 2.5 0 012.5-2.5h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0l-3.03 3.03z" />
		</svg>
	)
}
export default TableImageIcon
