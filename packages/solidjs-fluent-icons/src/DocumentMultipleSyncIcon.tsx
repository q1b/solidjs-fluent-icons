import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentMultipleSyncIcon(
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
			<path d="M4 4c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14a2 2 0 01-2 2h-2.2c.08-.32.15-.66.18-1H13a1 1 0 001-1V8h-3.5A1.5 1.5 0 019 6.5V3H6a1 1 0 00-1 1v5.02c-.34.03-.68.1-1 .19V4zm6-.8v3.3c0 .28.22.5.5.5h3.3L10 3.2zm.4 13.8c-.18.36-.4.7-.66 1h3.32A3.94 3.94 0 0017 14.06V9a1 1 0 00-1-1v6a3 3 0 01-3 3h-2.6zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H6a.5.5 0 010-1h.47a1.99 1.99 0 00-2.38.34.5.5 0 01-.71-.71A3 3 0 017 12.15V12c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 014 16.85V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z" />
		</svg>
	)
}
export default DocumentMultipleSyncIcon
