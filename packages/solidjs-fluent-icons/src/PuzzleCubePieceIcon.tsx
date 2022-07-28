import { splitProps, ComponentProps, JSX } from "solid-js"

function PuzzleCubePieceIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.2 1.29a1 1 0 00-1.4 0l-1.5 1.5a1 1 0 000 1.42l1.5 1.5a1 1 0 001.4 0l1.51-1.5a1 1 0 000-1.42l-1.5-1.5zM15 3.5L16.5 2 18 3.5 16.5 5 15 3.5zM13 3H5.5A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5V7h-4V3zM5.36 16A1.5 1.5 0 014 14.5V13h3v3H5.36zM8 13h4v3H8v-3zm8 1.64A1.5 1.5 0 0114.5 16H13v-3h3V14.64zM8 8h4v4H8V8zm5 4V8h3v4h-3zM8 4h4v3H8V4zM5.5 4H7v3H4V5.36A1.5 1.5 0 015.5 4zM4 12V8h3v4H4z" />
		</svg>
	)
}
export default PuzzleCubePieceIcon
