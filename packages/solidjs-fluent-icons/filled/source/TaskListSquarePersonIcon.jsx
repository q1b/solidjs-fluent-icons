import { splitProps } from "solid-js";
function TaskListSquarePersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.4a3 3 0 00-4.5 2.6H11a.5.5 0 000 1h1.67a3 3 0 00.6 1.01A2.5 2.5 0 0011.04 17H6a3 3 0 01-3-3V6zm6.35 1.1a.5.5 0 00-.7-.7L7.23 7.8l-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1zm0 4.3a.5.5 0 00-.7 0l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 000-.7zm1.15-3.9c0 .28.22.5.5.5h2.5a.5.5 0 000-1H11a.5.5 0 00-.5.5zm7 4.5a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default TaskListSquarePersonIcon;
