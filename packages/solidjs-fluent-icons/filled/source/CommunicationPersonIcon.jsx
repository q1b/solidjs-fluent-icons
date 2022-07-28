import { splitProps } from "solid-js";
function CommunicationPersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 4.5a6.5 6.5 0 00-4.6 11.1.75.75 0 11-1.06 1.05 8 8 0 1113.63-6.35 3 3 0 00-1.76-1.21A6.5 6.5 0 0010 4.5zm4.64 4.63a5 5 0 10-8.18 5.4.75.75 0 001.06-1.06 3.5 3.5 0 115.81-3.54 3 3 0 011.3-.8zM8 11a2 2 0 114 0 2 2 0 01-4 0zm9.5 1a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default CommunicationPersonIcon;
