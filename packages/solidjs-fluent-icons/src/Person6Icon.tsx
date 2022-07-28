import { splitProps, ComponentProps, JSX } from "solid-js"

function Person6Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6zM3 13a2 2 0 012-2h9.05c-.3.29-.54.63-.71 1H5A1 1 0 004 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0010 17c1.1 0 2.13-.15 3-.43 0 .34.06.68.16 1-.96.29-2.03.43-3.16.43a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm12 .5a1.5 1.5 0 012.63-1 .5.5 0 00.74-.65A2.5 2.5 0 0014 13.5v3a2.5 2.5 0 101-2v-1zm1.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
		</svg>
	)
}
export default Person6Icon
