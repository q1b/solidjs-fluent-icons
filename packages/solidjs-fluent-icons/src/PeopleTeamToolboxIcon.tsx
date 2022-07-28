import { splitProps, ComponentProps, JSX } from "solid-js"

function PeopleTeamToolboxIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.5 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4.5 3a1 1 0 112 0 1 1 0 01-2 0zm1-2a2 2 0 100 4 2 2 0 000-4zm-11 1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zM5 15h.1c.07.34.17.66.3.97A3 3 0 012 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 00-.25.25V13c0 1.1.9 2 2 2zm12-5.5c.5.37.84.91.96 1.54l.04.01v-1.8C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25v.25zm-1.5.5h-2c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V15h2v-.5a.5.5 0 011 0v.5h3v-.5a.5.5 0 011 0v.5h2v-1.5c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5zM7.25 9a.25.25 0 00-.25.25V14a3 3 0 002 2.83v.67c0 .13.01.26.03.38A4 4 0 016 14V9.25C6 8.56 6.56 8 7.25 8h5.5c.6 0 1.1.43 1.22 1H7.25zM13 12v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5h-3zm4 4v.5a.5.5 0 01-1 0V16h-3v.5a.5.5 0 01-1 0V16h-2v1.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V16h-2z" />
		</svg>
	)
}
export default PeopleTeamToolboxIcon
