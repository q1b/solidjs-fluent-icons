import { splitProps } from "solid-js";
function AlertUrgentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.26 2.08a.5.5 0 10-.52.85C15 4.31 16.86 6.34 17 10.02a.5.5 0 001-.04c-.16-4.1-2.28-6.4-4.74-7.9zM12.1 4.73a.5.5 0 01.69-.14 6.17 6.17 0 012.91 4.91.5.5 0 01-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 00-2.45-3.69.5.5 0 01-.13-.7zm-7.01.7a5.16 5.16 0 00-2.61 6.82L3.69 15l.09 2.32c.02.53.57.87 1.05.65l9.73-4.33c.49-.21.6-.85.22-1.22L13.1 10.8 11.9 8.05a5.16 5.16 0 00-6.81-2.61zm-1.7 6.41a4.16 4.16 0 017.6-3.38l1.3 2.92 1.54 1.5-9.06 4.03-.08-2.14-1.3-2.93zm7.3 6.04c-.68.3-1.46.05-1.85-.54l2.68-1.2c.19.7-.16 1.44-.83 1.74z"/>
    </svg>);
}
export default AlertUrgentIcon;
