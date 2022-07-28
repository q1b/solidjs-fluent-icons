import { splitProps } from "solid-js";
function DataAreaIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 2.49a.5.5 0 00-1 .01v15c0 .28.22.5.5.5h15a.5.5 0 100-1H3V2.49zM16 16V5.5a.5.5 0 00-.81-.39L10.45 8.9l-3.2-1.83a.5.5 0 00-.45-.03L4 8.3V16h12z"/>
    </svg>);
}
export default DataAreaIcon;
