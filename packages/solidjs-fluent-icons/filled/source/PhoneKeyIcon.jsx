import { splitProps } from "solid-js"
function PhoneKeyIcon(props) {
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
			<path d="M6.5 2C5.67 2 5 2.67 5 3.5v13c0 .83.67 1.5 1.5 1.5H9v-1c0-.41.16-.78.44-1.06l.94-.94H9a.5.5 0 010-1h2c.1 0 .2.03.29.1l.73-.74a3.72 3.72 0 01.31-1.98A4.1 4.1 0 0115 9.13V3.5c0-.83-.67-1.5-1.5-1.5h-7zm4 17a.48.48 0 01-.35-.15.48.48 0 01-.15-.35V17c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 01-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 011.61-1.57 2.94 2.94 0 013.27.64A3 3 0 0115 15.84V16.52a.65.65 0 01-.08.24.5.5 0 01-.15.17.46.46 0 01-.27.07H14c0 .24 0 .43-.02.56a.46.46 0 01-.11.3.47.47 0 01-.3.12L13 18v.27c0 .08 0 .17-.02.25a.86.86 0 01-.06.24.37.37 0 01-.15.17.57.57 0 01-.27.07h-2zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 00-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 00-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 00.22-.53z" />
		</svg>
	)
}
export default PhoneKeyIcon
