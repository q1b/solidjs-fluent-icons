import { splitProps } from "solid-js";
function TableFreezeColumnIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 14.5c0 .83-.67 1.5-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3H8v4h4V4h2.5c.83 0 1.5.67 1.5 1.5v9zM5.5 3H7v4H3V5.5A2.5 2.5 0 015.5 3zM7 12V8H3v4h4zm5-4H8v4h4V8zm-9 5h4v4H5.5A2.5 2.5 0 013 14.5V13z"/>
    </svg>);
}
export default TableFreezeColumnIcon;
