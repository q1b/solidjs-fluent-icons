import { splitProps } from "solid-js"
function UninstallAppIcon(props) {
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
			<path d="M4.5 17A1.5 1.5 0 013 15.5v-11C3 3.67 3.67 3 4.5 3h4.75c.83 0 1.5.67 1.5 1.5v4.75h4.75c.83 0 1.5.67 1.5 1.5v4.75c0 .83-.67 1.5-1.5 1.5h-11zm11-6.25h-4.75v4.75h4.75v-4.75zm-6.25 0H4.5v4.75h4.75v-4.75zm0-1.5V4.5H4.5v4.75h4.75zm5.03-2.47a.75.75 0 11-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 011.06-1.06l1.22 1.22 1.22-1.22a.75.75 0 111.06 1.06L16.56 4.5l1.22 1.22a.75.75 0 01-1.06 1.06L15.5 5.56l-1.22 1.22z" />
		</svg>
	)
}
export default UninstallAppIcon
