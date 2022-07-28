import { splitProps } from "solid-js";
function SerialPortIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.33 9.07A2.5 2.5 0 014.77 6h10.46a2.5 2.5 0 012.43 3.07l-.7 3A2.5 2.5 0 0114.53 14H5.47a2.5 2.5 0 01-2.44-1.93l-.7-3zM6 9.5a.5.5 0 100-1 .5.5 0 000 1zM8.5 9a.5.5 0 10-1 0 .5.5 0 001 0zM7 11.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zM10 9.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1z"/>
    </svg>);
}
export default SerialPortIcon;
