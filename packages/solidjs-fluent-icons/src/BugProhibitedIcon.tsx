import { splitProps, ComponentProps, JSX } from "solid-js"

function BugProhibitedIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.18 15.87c.1.38.23.74.4 1.09A3.99 3.99 0 016 13h-.5A1.5 1.5 0 004 14.5v2a.5.5 0 01-1 0v-2A2.5 2.5 0 015.5 12H6v-1.5H2.5a.5.5 0 010-1H6V8h-.5A2.5 2.5 0 013 5.5v-2a.5.5 0 011 0v2A1.5 1.5 0 005.5 7H6a3 3 0 012.31-2.92A2 2 0 018 3v-.5a.5.5 0 011 0V3a1 1 0 002 0v-.5a.5.5 0 011 0V3a2 2 0 01-.31 1.08A3 3 0 0114 7h.5A1.5 1.5 0 0016 5.5v-2a.5.5 0 011 0v2A2.5 2.5 0 0114.5 8H14v1.03c-.34.03-.67.09-1 .18V7a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2.99 2.99 0 002.18 2.87zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-7.3 2.1l4.9-4.9a3.48 3.48 0 00-4.57.33 3.5 3.5 0 00-.33 4.57zm6.3-2.1c0-.76-.24-1.5-.7-2.1l-4.9 4.9a3.48 3.48 0 004.57-.33A3.5 3.5 0 0018 14.5z" />
		</svg>
	)
}
export default BugProhibitedIcon
