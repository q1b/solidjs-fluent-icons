import { splitProps } from "solid-js";
function StreamOutputIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.78 1.97a.75.75 0 10-1.06 1.06l1.72 1.72h-3.69A4.75 4.75 0 009 9.5v1c0 1.8-1.46 3.25-3.25 3.25h-3a.75.75 0 000 1.5h3a4.75 4.75 0 004.75-4.75v-1c0-1.8 1.46-3.25 3.25-3.25h3.69l-1.72 1.72a.75.75 0 001.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3zM13.25 3.5A5.75 5.75 0 007.5 9.25v1c0 1.24-1 2.25-2.25 2.25h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75-.34.75-.75v-1C6 5.25 9.25 2 13.25 2h.5a.75.75 0 010 1.5h-.5zm.91 4c-.24.49-.3 1.03-.17 1.54-.28.1-.49.39-.49.71v1c0 4-3.25 7.25-7.25 7.25h-.5a.75.75 0 010-1.5h.5A5.75 5.75 0 0012 10.75v-1c0-1.21.96-2.2 2.16-2.25z"/>
    </svg>);
}
export default StreamOutputIcon;
