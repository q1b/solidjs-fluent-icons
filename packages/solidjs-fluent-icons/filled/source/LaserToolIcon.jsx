import { splitProps } from "solid-js";
function LaserToolIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 2a.5.5 0 00-.5.5V5a2 2 0 002 2h10a2 2 0 002-2V2.5a.5.5 0 00-.5-.5h-13z"/>
  <path d="M10.5 10h4c.83 0 1.5-.67 1.5-1.5V8H4v.5c0 .83.67 1.5 1.5 1.5h4v2.5a.5.5 0 001 0V10z"/>
  <path d="M5 14.5c0-.28.22-.5.5-.5H7a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5z"/>
  <path d="M13 14a.5.5 0 000 1h1.5a.5.5 0 000-1H13z"/>
  <path d="M10.5 14.5a.5.5 0 11-1 0 .5.5 0 011 0z"/>
  <path d="M10.5 16.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z"/>
  <path d="M8.85 15.15c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l1.5-1.5c.2-.2.5-.2.7 0z"/>
  <path d="M11.15 15.85a.5.5 0 01.7-.7l1.5 1.5a.5.5 0 01-.7.7l-1.5-1.5z"/>
    </svg>);
}
export default LaserToolIcon;
