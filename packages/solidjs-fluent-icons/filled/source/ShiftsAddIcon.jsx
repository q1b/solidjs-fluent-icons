import { splitProps } from "solid-js";
function ShiftsAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v3.6a5.5 5.5 0 017.4 7.4H14a3 3 0 003-3V6a3 3 0 00-3-3H6zm4.5 3c.28 0 .5.22.5.5V9h1.5a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5zm-.5 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5z"/>
    </svg>);
}
export default ShiftsAddIcon;
