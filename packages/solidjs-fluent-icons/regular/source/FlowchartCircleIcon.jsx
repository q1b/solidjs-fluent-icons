import { splitProps } from "solid-js";
function FlowchartCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 6.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5H8v1.8L9.2 12H11v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V13H9.2l-1.35 1.35a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 010-.7L7 10.79V9h-.5a.5.5 0 01-.5-.5v-2zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z"/>
    </svg>);
}
export default FlowchartCircleIcon;
