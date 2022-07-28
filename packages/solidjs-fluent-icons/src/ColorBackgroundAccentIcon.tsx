import { splitProps, ComponentProps, JSX } from "solid-js"

function ColorBackgroundAccentIcon(
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
			<path d="M2.75 11.41l.33.33a3 3 0 004.24 0l.68-.68c.03 1.34.96 2.94 2.75 2.94 1.82 0 2.75-1.65 2.75-3 0-1.01-.53-1.96-.86-2.47-.2-.3-.38-.55-.52-.72V7.8l-.24-.29h-.01a1.5 1.5 0 00-.85-.49 3 3 0 00-.8-2.27h5.28c.97 0 1.75.78 1.75 1.75v7c0 .97-.78 1.75-1.75 1.75h-11c-.97 0-1.75-.78-1.75-1.75v-2.09z" />
		</svg>
	)
}
export default ColorBackgroundAccentIcon
