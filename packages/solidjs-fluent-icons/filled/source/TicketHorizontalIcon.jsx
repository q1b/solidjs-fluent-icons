import { splitProps } from "solid-js";
function TicketHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 6v1.5a.5.5 0 01-.5.5 2 2 0 100 4c.28 0 .5.22.5.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1v-1.5c0-.28.22-.5.5-.5a2 2 0 100-4 .5.5 0 01-.5-.5V6a1 1 0 011-1h14a1 1 0 011 1z"/>
    </svg>);
}
export default TicketHorizontalIcon;
