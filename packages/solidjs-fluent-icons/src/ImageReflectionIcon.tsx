import { splitProps, ComponentProps, JSX } from "solid-js"

function ImageReflectionIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 3a3 3 0 00-3 3v6a3 3 0 001.34 2.5A3 3 0 004 17a.5.5 0 001 0c0-1.1.9-2 2-2a.5.5 0 000-1 2 2 0 01-1.02-.28l3.53-3.52a.7.7 0 01.98 0l3.53 3.52A2 2 0 0113 14a.5.5 0 000 1 2 2 0 012 2 .5.5 0 001 0 3 3 0 00-1.34-2.5A3 3 0 0016 12V6a3 3 0 00-3-3H7zm1.8 6.5l-3.52 3.52A2 2 0 015 12V6c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-.28 1.02L11.2 9.49a1.7 1.7 0 00-2.4 0zm.7 4.5a.5.5 0 000 1h1a.5.5 0 000-1h-1zM13 7a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default ImageReflectionIcon
