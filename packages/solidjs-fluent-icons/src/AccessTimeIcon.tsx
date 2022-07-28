import { splitProps, ComponentProps, JSX } from "solid-js"

function AccessTimeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.99 8.6A.5.5 0 016 8.4a1.29 1.29 0 01.07-.24 2 2 0 01.25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 019.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 01-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 010 1H6.5a.5.5 0 01-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 00.23-.26c.05-.1.09-.23.09-.44a.8.8 0 00-.19-.53.7.7 0 00-.56-.22.7.7 0 00-.61.3 1 1 0 00-.15.3zM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 011 0v5a.5.5 0 01-1 0V11h-2a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5zm-1-5a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" />
		</svg>
	)
}
export default AccessTimeIcon
