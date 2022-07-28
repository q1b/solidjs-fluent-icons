import { splitProps } from "solid-js";
function GroupIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 4.5c0 .17-.02.34-.05.5H10a1 1 0 011 1v2h-1a2 2 0 00-2 2v1H6a1 1 0 01-1-1V6.95a2.51 2.51 0 01-1 0V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 010-1H10a1 1 0 01-1-1v-2h1a2 2 0 002-2V9h2a1 1 0 011 1v3.05a2.51 2.51 0 011 0V10a2 2 0 00-2-2h-2V6a2 2 0 00-2-2H6.95c.03.16.05.33.05.5zM11 9v1a1 1 0 01-1 1H9v-1a1 1 0 011-1h1zM6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
    </svg>);
}
export default GroupIcon;
