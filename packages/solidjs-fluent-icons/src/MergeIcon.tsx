import { splitProps, ComponentProps, JSX } from "solid-js"

function MergeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 5.5c0-.28.22-.5.5-.5h1.65c1 0 1.95.43 2.62 1.17l2.2 2.5a2.5 2.5 0 001.88.83h4.44l-3.64-3.65a.5.5 0 01.7-.7l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 01-.7-.7l3.64-3.65h-4.44c-.72 0-1.4.3-1.87.84l-2.21 2.49A3.5 3.5 0 015.15 15H3.5a.5.5 0 010-1h1.65c.72 0 1.4-.3 1.87-.84l2.21-2.49c.24-.26.51-.49.81-.67a3.5 3.5 0 01-.8-.67l-2.22-2.5A2.5 2.5 0 005.15 6H3.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default MergeIcon
