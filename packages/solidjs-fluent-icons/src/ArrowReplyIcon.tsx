import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowReplyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.7 9l3.4 3.39a.5.5 0 01-.64.76l-.07-.05-4.24-4.25a.5.5 0 01-.06-.63l.06-.07L6.39 3.9a.5.5 0 01.76.64l-.05.07L3.7 8H10a7.5 7.5 0 017.5 7.26v.24a.5.5 0 01-1 0A6.5 6.5 0 0010.23 9H3.7l3.4 3.39L3.7 9z" />
		</svg>
	)
}
export default ArrowReplyIcon
