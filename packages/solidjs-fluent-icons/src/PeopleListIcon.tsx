import { splitProps, ComponentProps, JSX } from "solid-js"

function PeopleListIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 6.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6.75 3.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM10 11a2 2 0 011.08.32c-.27.2-.46.5-.54.84A1 1 0 0010 12H3.5a1 1 0 00-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 15.2 4.5 16 6.75 16s3.26-.8 3.74-1.5l.01-.01v.01c0 .38.14.73.38 1a1.5 1.5 0 00-.2.27C9.9 16.47 8.67 17 6.76 17c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 01-.68-1.99V13c0-1.1.9-2 2-2H10zm3-3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM14.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 12a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6z" />
		</svg>
	)
}
export default PeopleListIcon
