import { splitProps, ComponentProps, JSX } from "solid-js"

function RamIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16.04 4c.26 0 .5.05.74.16A2.06 2.06 0 0118 5.96V11a2 2 0 01-1 1.73v1.77a1.45 1.45 0 01-.44 1.05c-.13.14-.3.25-.48.33-.19.09-.38.13-.58.12h-4a.48.48 0 01-.35-.15L10 14.7l-1.15 1.15c-.1.1-.21.15-.35.15h-4a1.45 1.45 0 01-1.05-.44c-.14-.13-.25-.3-.33-.48A1.32 1.32 0 013 14.5v-1.77c-.3-.17-.55-.42-.73-.73A2.06 2.06 0 012 11V5.96c0-.26.05-.5.16-.74A2.06 2.06 0 013.96 4h12.08zM17 6a.95.95 0 00-.08-.38 1.1 1.1 0 00-.2-.32A1 1 0 0016 5H3.99a.97.97 0 00-.7.29c-.1.09-.16.2-.22.32A.85.85 0 003 6v5c0 .14.03.27.08.4.05.11.12.22.2.31.1.1.2.16.32.21.12.05.25.07.4.08h12a.97.97 0 00.7-.29c.1-.09.16-.2.22-.32A.85.85 0 0017 11V6zm-2 0c.14 0 .26.03.38.08s.23.12.32.2A1 1 0 0116 7v3.01a.97.97 0 01-.29.7c-.09.1-.2.16-.32.22A.85.85 0 0115 11H5a.97.97 0 01-.4-.08 1.1 1.1 0 01-.31-.2.85.85 0 01-.21-.32A1.2 1.2 0 014 10V7a.97.97 0 01.29-.7c.09-.1.2-.16.32-.22A.85.85 0 015 6h10zM7.5 7H5v3h2.5V7zm4 3V7h-3v3h3zm1 0H15V7h-2.5v3zm3.5 3H4v1.5c0 .14.05.25.15.35.1.1.21.15.35.15h3.8l1.35-1.35c.1-.1.21-.15.35-.15.14 0 .25.05.35.15L11.71 15h3.79c.14 0 .25-.05.35-.15.1-.1.15-.21.15-.35V13z" />
		</svg>
	)
}
export default RamIcon
