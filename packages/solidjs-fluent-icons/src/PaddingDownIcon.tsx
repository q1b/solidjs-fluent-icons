import { splitProps, ComponentProps, JSX } from "solid-js"

function PaddingDownIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.35 11.35l-4.5 4.5a.5.5 0 01-.7 0l-4.5-4.5a.5.5 0 01.7-.7L9 14.29V4.5a.5.5 0 011 0v9.8l3.65-3.65a.5.5 0 01.7.7zM3.5 3a.5.5 0 010-1h12a.5.5 0 010 1h-12zm0 15a.5.5 0 010-1h1a.5.5 0 010 1h-1zm3 0a.5.5 0 010-1h2a.5.5 0 010 1h-2zm4 0a.5.5 0 010-1h2a.5.5 0 010 1h-2zm4 0a.5.5 0 010-1h1a.5.5 0 010 1h-1z" />
		</svg>
	)
}
export default PaddingDownIcon
