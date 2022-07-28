import { splitProps } from "solid-js";
function PhoneDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.76a5.47 5.47 0 01-1.24-3H7.5a.5.5 0 010-1h1.52A5.5 5.5 0 0114 9.02V3.5c0-.83-.67-1.5-1.5-1.5h-7zm9 17a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z"/>
    </svg>);
}
export default PhoneDismissIcon;
