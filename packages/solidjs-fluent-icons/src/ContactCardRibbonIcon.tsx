import { splitProps, ComponentProps, JSX } from "solid-js"

function ContactCardRibbonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4 3.2c0-.53.42-.95.95-.95h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 01-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8zM11.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 3a.5.5 0 000 1h.63c.09-.35.23-.7.4-1H11.5zm-7.75 4h8.79c.13.23.28.45.46.65V16H3.75C2.78 16 2 15.22 2 14.25v-8.5C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v3.79c-.3-.18-.65-.32-1-.41V5.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v8.5c0 .41.34.75.75.75zM19 13a3 3 0 11-6 0 3 3 0 016 0zm-1 3.46a3.98 3.98 0 01-4 0v2.29c0 .2.21.31.38.22L16 18l1.62.97c.17.1.38-.03.38-.22v-2.29z" />
		</svg>
	)
}
export default ContactCardRibbonIcon
