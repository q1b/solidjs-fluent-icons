import { splitProps } from "solid-js";
function CheckmarkNoteIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.03 12.9L2.56 9a.75.75 0 10-1.12 1l4 4.5c.29.32.79.34 1.09.03l10.5-10.5a.75.75 0 00-1.06-1.06l-9.94 9.94zM11 13c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-4zm6.5 3h-4a.5.5 0 100 1h4a.5.5 0 100-1zm-4-3a.5.5 0 100 1h4a.5.5 0 100-1h-4z"/>
    </svg>);
}
export default CheckmarkNoteIcon;
