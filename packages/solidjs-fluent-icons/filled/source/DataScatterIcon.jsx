import { splitProps } from "solid-js";
function DataScatterIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 2.5a.5.5 0 00-1 0v15c0 .28.22.5.5.5h15a.5.5 0 000-1H3V2.5zM7.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
    </svg>);
}
export default DataScatterIcon;
