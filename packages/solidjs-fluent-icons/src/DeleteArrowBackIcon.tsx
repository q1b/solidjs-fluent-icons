import { splitProps, ComponentProps, JSX } from "solid-js"

function DeleteArrowBackIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.5 4a1.5 1.5 0 00-3 0h3zm-4 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-.49 4.2a5.48 5.48 0 00-.98-.18L15.44 5H4.56l1.18 10.23A2 2 0 007.73 17H9.6c.18.36.4.7.66 1H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zm7 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0117 16.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7l1.76-1.75a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default DeleteArrowBackIcon
