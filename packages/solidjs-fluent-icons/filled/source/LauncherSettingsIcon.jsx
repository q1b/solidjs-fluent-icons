import { splitProps } from "solid-js"
function LauncherSettingsIcon(props) {
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
			<path d="M1.91 7.38A8.5 8.5 0 013.7 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 000 1.52l1.56 1.32a.5.5 0 01.15.54 8.5 8.5 0 01-1.78 3.08.5.5 0 01-.54.13l-1.92-.68a1 1 0 00-1.32.76l-.37 2a.5.5 0 01-.38.4 8.53 8.53 0 01-3.56 0 .5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zm6.19.4l-1.58 1.9a.5.5 0 000 .64l1.39 1.67c.1.12.28.12.38 0l.93-1.11a.25.25 0 000-.32L8.75 10l.6-.72-1.25-1.5zM8.75 7l2.5 3-2.16 2.59a.25.25 0 00.2.41h1.84c.08 0 .15-.03.2-.09l2.15-2.59a.5.5 0 000-.64L11.25 7h-2.5z" />
		</svg>
	)
}
export default LauncherSettingsIcon
