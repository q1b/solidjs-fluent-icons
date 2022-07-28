import { splitProps } from "solid-js";
function TableCopyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 13.5A3.5 3.5 0 006.5 17h7.83c-.77.63-1.76 1-2.83 1h-5A4.5 4.5 0 012 13.5v-5c0-1.07.37-2.06 1-2.83v7.83zm1.73 1.77A2.5 2.5 0 014 13.5v-9A2.5 2.5 0 016.5 2h9A2.5 2.5 0 0118 4.5v9a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-1.77-.73zM17 6V4.5A1.5 1.5 0 0015.64 3H14v3h3zm-4-3H9v3h4V3zM8 3H6.5A1.5 1.5 0 005 4.36V6h3V3zm1 4v4h4V7H9zm-4 4h3V7H5v4zm4 1v3h4v-3H9zm-2.5 3H8v-3H5v1.5A1.5 1.5 0 006.36 15h.14zm7.5-3v3h1.5a1.5 1.5 0 001.5-1.36V12h-3zm0-5v4h3V7h-3z"/>
    </svg>);
}
export default TableCopyIcon;
