import { splitProps } from "solid-js";
function MailReadIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.26 3.07a.5.5 0 00-.52 0L2.97 7.13a2 2 0 00-.7.71l7.73 4.1 7.73-4.1a2 2 0 00-.7-.7l-6.77-4.07zM18 8.83l-7.77 4.11a.5.5 0 01-.46 0L2 8.84v5.66A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5V8.85v-.02z"/>
    </svg>);
}
export default MailReadIcon;
