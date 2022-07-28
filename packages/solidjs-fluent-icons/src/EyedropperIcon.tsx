import { splitProps, ComponentProps, JSX } from "solid-js"

function EyedropperIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.25 2.75a2.62 2.62 0 00-3.71 0L12.5 3.8l-.35-.35a1.5 1.5 0 00-2.12 0l-.59.59a1.5 1.5 0 000 2.12l.35.35-6.35 6.35A1.5 1.5 0 003 13.91v.5l-.96 2.26a1 1 0 001.32 1.31L5.6 17h.49c.4 0 .78-.16 1.06-.44l6.35-6.35.35.35a1.5 1.5 0 002.12 0l.59-.58a1.5 1.5 0 000-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 000-3.7zm-3 .71a1.62 1.62 0 012.29 2.3l-1.4 1.39a.5.5 0 000 .7l.71.71c.2.2.2.51 0 .7l-.58.6a.5.5 0 01-.71 0l-4.41-4.42a.5.5 0 010-.7l.58-.59c.2-.2.52-.2.71 0l.7.7a.5.5 0 00.71 0l1.4-1.39zM12.79 9.5l-6.35 6.35a.5.5 0 01-.35.15H5.5a.5.5 0 00-.2.04l-2.34 1.03 1-2.36a.5.5 0 00.04-.2v-.6a.5.5 0 01.15-.35l6.35-6.35 2.3 2.3z" />
		</svg>
	)
}
export default EyedropperIcon
