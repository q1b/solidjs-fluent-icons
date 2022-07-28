import { splitProps } from "solid-js";
function TableBottomRowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 3A2.5 2.5 0 0117 5.5V12h-1V5.5c0-.78-.6-1.42-1.36-1.5H5.5c-.78 0-1.42.6-1.5 1.36V12H3V5.5A2.5 2.5 0 015.5 3h9zM17 14.5a2.5 2.5 0 01-2.5 2.5H13v-4h4v1.5zm-13 2c.42.31.94.5 1.5.5H7v-4H3v1.5c0 .82.4 1.54 1 2zM8 13h4v4H8v-4z"/>
    </svg>);
}
export default TableBottomRowIcon;
