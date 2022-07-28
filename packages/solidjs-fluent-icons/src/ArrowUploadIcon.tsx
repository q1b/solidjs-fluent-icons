import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowUploadIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M15 3a.5.5 0 00.09-.99H4a.5.5 0 00-.09.98L4 3h11zM9.5 18a.5.5 0 00.5-.41V5.7l3.64 3.65c.17.18.44.2.64.06l.07-.06a.5.5 0 00.06-.63l-.06-.07-4.5-4.5A.5.5 0 009.6 4h-.1a.5.5 0 00-.4.19L4.64 8.65a.5.5 0 00.64.76l.07-.06L9 5.71V17.5c0 .28.22.5.5.5z" />
		</svg>
	)
}
export default ArrowUploadIcon
