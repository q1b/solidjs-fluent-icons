import { splitProps } from "solid-js";
function SerialPortIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 9.5a.5.5 0 100-1 .5.5 0 000 1zM8.5 9a.5.5 0 11-1 0 .5.5 0 011 0zM7 11.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 9.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zM4.77 6a2.5 2.5 0 00-2.44 3.07l.7 3A2.5 2.5 0 005.47 14h9.06a2.5 2.5 0 002.43-1.93l.7-3A2.5 2.5 0 0015.23 6H4.77zM3.3 8.84A1.5 1.5 0 014.77 7h10.46c.97 0 1.68.9 1.46 1.84l-.7 3A1.5 1.5 0 0114.53 13H5.47c-.7 0-1.3-.48-1.46-1.16l-.7-3z"/>
    </svg>);
}
export default SerialPortIcon;
