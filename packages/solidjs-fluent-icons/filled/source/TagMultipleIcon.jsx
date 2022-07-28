import { splitProps } from "solid-js";
function TagMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 11.8a2 2 0 00.46 2.11l2.97 2.98a4 4 0 005.65.02l4.4-4.36a2 2 0 00.6-1.43v-.57l-5 4.96-.15.13-.56.55a3 3 0 01-4.23 0l-.5-.5a4.05 4.05 0 01-.2-.2l-2.98-2.98A2 2 0 013 11.8zm6.2-9.21A2 2 0 0110.63 2h4.45a2 2 0 012 2v4.37a2 2 0 01-.59 1.43l-5.82 5.76a2 2 0 01-2.82-.01l-4.38-4.39a2 2 0 010-2.82L9.2 2.59zm4.3 3.91a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>);
}
export default TagMultipleIcon;
