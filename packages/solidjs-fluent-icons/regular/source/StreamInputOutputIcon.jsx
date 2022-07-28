import { splitProps } from "solid-js";
function StreamInputOutputIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 3a6 6 0 00-6 6v1a2 2 0 01-2 2H2.5a.5.5 0 010-1H5a1 1 0 001-1V9a7 7 0 017-7h.5a.5.5 0 010 1H13zm-3 6.5A3.5 3.5 0 0113.5 6h4a.5.5 0 000-1h-4A4.5 4.5 0 009 9.5v1A3.5 3.5 0 015.5 14h-3a.5.5 0 000 1h3a4.5 4.5 0 004.5-4.5v-1zm3 .5c0-.6.4-1 1-1h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H14a2 2 0 00-2 2v1c0 .9-.2 1.7-.5 2.4.3-.2.6-.4 1-.4h.2c.2-.6.3-1.3.3-2v-1zm-.15 8.16a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7l-1.14 1.16h5.58l-1.14-1.15a.5.5 0 01.7-.7l2 2c.2.19.2.5 0 .7l-2 2a.5.5 0 01-.7-.7l1.14-1.15h-5.58l1.14 1.14z"/>
    </svg>);
}
export default StreamInputOutputIcon;
