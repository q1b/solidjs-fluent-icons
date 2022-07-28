import { splitProps, ComponentProps, JSX } from "solid-js"

function TextAsteriskIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.5 2.5a.5.5 0 00-1 0v6.3L5.05 4.33a.5.5 0 10-.7.71L8.78 9.5H2.5a.5.5 0 000 1h6.3l-4.46 4.45a.5.5 0 10.71.7l4.45-4.44v6.29a.5.5 0 001 0v-6.3l4.45 4.46a.5.5 0 10.7-.71l-4.44-4.45h6.29a.5.5 0 000-1h-6.3l4.46-4.45a.5.5 0 10-.71-.7L10.5 8.78V2.5z" />
		</svg>
	)
}
export default TextAsteriskIcon
