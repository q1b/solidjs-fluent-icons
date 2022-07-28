import { splitProps } from "solid-js";
function DrawerPlayIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.2 4H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V9.74c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 00-.5.5 2 2 0 11-4 0 .5.5 0 00-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1zm5.3 6a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.76-6.59l2.97 1.65a.5.5 0 010 .88l-2.97 1.65a.5.5 0 01-.74-.44v-3.3a.5.5 0 01.74-.44z"/>
    </svg>);
}
export default DrawerPlayIcon;
