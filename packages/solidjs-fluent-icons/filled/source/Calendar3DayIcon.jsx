import { splitProps } from "solid-js";
function Calendar3DayIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm-8 3a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41A.5.5 0 006.5 6zM10 6a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41A.5.5 0 0010 6zm3.5 0a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41a.5.5 0 00-.5-.41z"/>
    </svg>);
}
export default Calendar3DayIcon;
