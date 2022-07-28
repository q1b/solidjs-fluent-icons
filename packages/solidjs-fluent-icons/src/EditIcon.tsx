import { splitProps, ComponentProps, JSX } from "solid-js"

function EditIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.18 2.93a2.97 2.97 0 00-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.93-.88c.46-.1.9-.33 1.23-.67l9.36-9.36a2.97 2.97 0 00.05-4.15zm-3.55.65a1.97 1.97 0 012.8 2.8l-.68.66-2.8-2.79.68-.67zm-1.38 1.38l2.8 2.8-7.99 7.97c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l8-8z" />
		</svg>
	)
}
export default EditIcon
