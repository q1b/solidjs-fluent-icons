import { splitProps } from "solid-js";
function CollectionsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.5 7A2.5 2.5 0 0118 9.33v6.17a2.5 2.5 0 01-2.33 2.5H9.5A2.5 2.5 0 017 15.66V9.5A2.5 2.5 0 019.34 7h6.16zm-3 2a.5.5 0 00-.5.4V12H9.41a.5.5 0 000 1H12v2.59a.5.5 0 001 0v-2.6h2.6a.5.5 0 000-.98l-.1-.01H13V9.4a.5.5 0 00-.5-.4zm.16-5.3l.05.15L13.3 6H9a3 3 0 00-3 2.82V14.35a2.5 2.5 0 01-2.3-1.69l-.06-.17-1.55-5.8a2.5 2.5 0 011.6-3l.16-.05 5.8-1.56a2.5 2.5 0 012.96 1.46l.05.15z"/>
    </svg>);
}
export default CollectionsIcon;
