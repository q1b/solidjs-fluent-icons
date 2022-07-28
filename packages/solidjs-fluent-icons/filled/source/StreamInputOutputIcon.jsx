import { splitProps } from "solid-js";
function StreamInputOutputIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.25 3.5A5.75 5.75 0 007.5 9.25v1c0 1.24-1 2.25-2.25 2.25h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75-.34.75-.75v-1C6 5.25 9.25 2 13.25 2h.5a.75.75 0 010 1.5h-.5zm-2.75 6c0-1.8 1.46-3.25 3.25-3.25h3.5a.75.75 0 000-1.5h-3.5A4.75 4.75 0 009 9.5v1c0 1.8-1.46 3.25-3.25 3.25h-3a.75.75 0 000 1.5h3a4.75 4.75 0 004.75-4.75v-1zm3.75-.5a.75.75 0 00-.75.75v1c0 .66-.09 1.3-.25 1.9a1.9 1.9 0 00-1.59.05c.22-.61.34-1.27.34-1.95v-1c0-1.24 1-2.25 2.25-2.25h3a.75.75 0 010 1.5h-3zm-1.4 9.16a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7l-1.14 1.16h5.58l-1.14-1.15a.5.5 0 01.7-.7l2 2c.2.19.2.5 0 .7l-2 2a.5.5 0 01-.7-.7l1.14-1.15h-5.58l1.14 1.14z"/>
    </svg>);
}
export default StreamInputOutputIcon;
