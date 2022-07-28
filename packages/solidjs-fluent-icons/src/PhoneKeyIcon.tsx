import { splitProps, ComponentProps, JSX } from "solid-js"

function PhoneKeyIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2v-1H7a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v5.54a3.97 3.97 0 011-.4V4a2 2 0 00-2-2H7zm3.38 13l.91-.9A.5.5 0 0011 14H9a.5.5 0 000 1h1.38zm.12 4a.48.48 0 01-.35-.15.48.48 0 01-.15-.35V17c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 01-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 011.61-1.57 2.94 2.94 0 013.27.64A3 3 0 0115 15.84V16.52a.65.65 0 01-.08.24.5.5 0 01-.15.17.46.46 0 01-.27.07H14c0 .24 0 .43-.02.56a.46.46 0 01-.11.3.47.47 0 01-.3.12L13 18v.27c0 .08 0 .17-.02.25a.86.86 0 01-.06.24.37.37 0 01-.15.17.57.57 0 01-.27.07h-2zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 00-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 00-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 00.22-.53z" />
		</svg>
	)
}
export default PhoneKeyIcon
