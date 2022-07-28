import { splitProps } from "solid-js";
function MailEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 6.37v2.76a2.87 2.87 0 00-2.9.71l-4.83 4.83a3.2 3.2 0 00-.8 1.33H4.5A2.5 2.5 0 012 13.5V6.37l7.75 4.56c.15.1.35.1.5 0L18 6.37zM15.5 3a2.5 2.5 0 012.48 2.22L10 9.92l-7.98-4.7A2.5 2.5 0 014.5 3h11zm-4.52 12.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z"/>
    </svg>);
}
export default MailEditIcon;
