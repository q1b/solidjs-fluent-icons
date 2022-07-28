import { splitProps, ComponentProps, JSX } from "solid-js"

function Timer2Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 11-.7.71l-1.42-1.41a.5.5 0 010-.71zM9 6.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zm3 11.04A6.98 6.98 0 012.5 11a7 7 0 0113.95-.87 3.5 3.5 0 00-1.03-.13 6 6 0 10-3.23 6.37A3.5 3.5 0 0012 17.5v.04zM15.5 11a2.5 2.5 0 00-2.5 2.5.5.5 0 001 0 1.5 1.5 0 111.5 1.5 2.5 2.5 0 00-2.5 2.5v1c0 .28.22.5.5.5h4a.5.5 0 000-1H14v-.5c0-.83.67-1.5 1.5-1.5a2.5 2.5 0 000-5z" />
		</svg>
	)
}
export default Timer2Icon
