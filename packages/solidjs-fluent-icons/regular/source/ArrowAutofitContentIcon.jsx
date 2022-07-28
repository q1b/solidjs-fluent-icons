import { splitProps } from "solid-js";
function ArrowAutofitContentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 010 1H4.7l.65.65a.5.5 0 11-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.2-.2.5-.2.7 0zM5.5 9A2.5 2.5 0 003 11.5v3A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-3A2.5 2.5 0 0014.5 9h-9zM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-3zm2 1a.5.5 0 000 1h8a.5.5 0 000-1H6zm8.65-8.15a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65H12.5a.5.5 0 010-1h2.8l-.65-.65z"/>
    </svg>);
}
export default ArrowAutofitContentIcon;
