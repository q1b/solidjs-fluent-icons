import { splitProps, ComponentProps, JSX } from "solid-js"

function NumberCircle1Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11 6.5a.5.5 0 00-.98-.12c-.1.4-.38.91-.73 1.38-.36.47-.75.86-1.07 1.07a.5.5 0 00.56.84c.4-.27.84-.7 1.22-1.2v5.03a.5.5 0 101 0v-7zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" />
		</svg>
	)
}
export default NumberCircle1Icon
