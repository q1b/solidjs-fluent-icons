import { splitProps } from "solid-js";
function TableFreezeColumnAndRowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 002.5-2.5v-9zm-14 9V13h4v4H5.5A2.5 2.5 0 013 14.5zM8 8v4h4V8H8z"/>
    </svg>);
}
export default TableFreezeColumnAndRowIcon;
