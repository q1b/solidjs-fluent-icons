import { splitProps } from "solid-js"
function EditArrowBackIcon(props) {
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
			<path d="M17.18 2.93a2.97 2.97 0 00-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l7.99-8 2.8 2.8L13.78 9c.41.02.82.09 1.21.2l2.13-2.13a2.97 2.97 0 00.05-4.15zm-3.55.65a1.97 1.97 0 012.79 2.8l-.67.66-2.8-2.79.68-.67zM13.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0116 16.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7l1.76-1.75a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default EditArrowBackIcon
