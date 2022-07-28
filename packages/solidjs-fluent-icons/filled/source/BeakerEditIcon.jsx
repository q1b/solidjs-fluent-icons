import { splitProps } from "solid-js";
function BeakerEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.25 3v4.75c0 .4-.1.81-.3 1.18l-.84 1.57h7.78l-.84-1.57a2.5 2.5 0 01-.3-1.18V3h.75a.5.5 0 000-1h-7a.5.5 0 000 1h.75zm7.17 8.5H3.58l-1.23 2.3A1.5 1.5 0 003.67 16h5.8c.16-.5.43-.96.8-1.33l2.51-2.5-.36-.67zm-1.44 3.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z"/>
    </svg>);
}
export default BeakerEditIcon;
