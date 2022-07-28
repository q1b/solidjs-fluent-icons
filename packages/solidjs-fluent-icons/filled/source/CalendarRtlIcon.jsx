import { splitProps } from "solid-js";
function CalendarRtlIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 3A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zM3 7h14v7.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5V7zm9 3a1 1 0 102 0 1 1 0 00-2 0zm1 4a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 102 0 1 1 0 00-2 0zm1 4a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 102 0 1 1 0 00-2 0z"/>
    </svg>);
}
export default CalendarRtlIcon;
