import { splitProps } from "solid-js";
function FlowchartIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4.5C3 3.67 3.67 3 4.5 3h2C7.33 3 8 3.67 8 4.5v2C8 7.33 7.33 8 6.5 8H6v3.84a1 1 0 01.2.16L8 13.8a1 1 0 01.16.2H12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5V15H8.16a1 1 0 01-.16.2L6.2 17a1 1 0 01-1.4 0L3 15.2a1 1 0 010-1.4L4.8 12a1 1 0 01.2-.16V8h-.5A1.5 1.5 0 013 6.5v-2z"/>
    </svg>);
}
export default FlowchartIcon;
