import { splitProps } from "solid-js";
function GatherIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 8v4H2V8h4zm-3.85 8.85A.5.5 0 012 16.5V13h4v2a2 2 0 01-2 2H2.5a.5.5 0 01-.35-.15zM2.5 3H4a2 2 0 012 2v2H2V3.5a.5.5 0 01.5-.5zM18 6.5V10h-4V8a2 2 0 012-2h1.5a.5.5 0 01.5.5zm0 8V11h-4v2a2 2 0 002 2h1.5a.5.5 0 00.5-.5zm-7.85-3.35a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 10-.7.7l.64.65H8a.5.5 0 100 1h2.8l-.65.65z"/>
    </svg>);
}
export default GatherIcon;
