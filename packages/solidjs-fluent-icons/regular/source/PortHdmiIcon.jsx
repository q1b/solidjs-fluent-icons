import { splitProps } from "solid-js";
function PortHdmiIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.85 7.44A1.5 1.5 0 015.91 7h8.18c.4 0 .78.16 1.06.44l2.41 2.41c.28.28.44.67.44 1.06v.59c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 11.5v-.59c0-.4.16-.78.44-1.06l2.41-2.41zM5.91 8a.5.5 0 00-.35.15l-2.41 2.41a.5.5 0 00-.15.35v.59c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-.59a.5.5 0 00-.15-.35l-2.41-2.41a.5.5 0 00-.35-.15H5.9zM6 10c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7A.5.5 0 016 10z"/>
    </svg>);
}
export default PortHdmiIcon;
