import { splitProps, ComponentProps, JSX } from "solid-js"

function DatabasePlugConnectedIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v5.1a2.97 2.97 0 00-1 .27V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 015 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0010 17h.02a3 3 0 00.04.16l-.76.77a1.5 1.5 0 00-.06.06 10.18 10.18 0 01-3.34-.77C4.87 16.75 4 16.01 4 15V5zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0010 7a9.2 9.2 0 003.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0010 3a9.2 9.2 0 00-3.68.69C5.36 4.12 5 4.63 5 5zm14.2 5.85a.5.5 0 10-.7-.7l-1.2 1.18a.64.64 0 00-.03.05 2 2 0 00-2.44.3l-.6.6a.98.98 0 000 1.4l1.45 1.43a.98.98 0 001.38 0l.6-.6a2 2 0 00.3-2.44.36.36 0 00.06-.03l1.18-1.19zm-5.67 3.53a.98.98 0 00-1.39 0l-.6.6a2 2 0 00-.3 2.43.42.42 0 00-.05.04L10 18.63a.5.5 0 00.7.7l1.19-1.18a.5.5 0 00.03-.05 2 2 0 002.44-.3l.6-.6a.98.98 0 000-1.39l-1.44-1.44z" />
		</svg>
	)
}
export default DatabasePlugConnectedIcon
