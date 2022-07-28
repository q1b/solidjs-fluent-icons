import { splitProps } from "solid-js";
function GroupDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 00-2 2v.5H6a.5.5 0 01-.5-.5V6.8a2.5 2.5 0 01-1.5.15V10c0 1.1.9 2 2 2h2v2a2 2 0 001.16 1.81 5.51 5.51 0 01.34-3.6V10c0-.28.22-.5.5-.5h2.2a5.48 5.48 0 013.61-.34A2 2 0 0014 8h-2V6a2 2 0 00-2-2H6.95c.03.16.05.33.05.5zm-1 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm13-1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z"/>
    </svg>);
}
export default GroupDismissIcon;
