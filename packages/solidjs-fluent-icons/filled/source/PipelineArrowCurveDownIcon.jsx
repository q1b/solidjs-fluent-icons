import { splitProps } from "solid-js";
function PipelineArrowCurveDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M1 5.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm6.4.9l-.9.9V5.74A2.75 2.75 0 003.75 3H3.5a.5.5 0 100 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 00-.7.71l1.75 1.76a.5.5 0 00.7 0L8.12 7.1a.5.5 0 10-.7-.7zM2 9.74a5.48 5.48 0 003 1.24v3.52a1.5 1.5 0 01-3 0V9.74zM10.98 6A5.5 5.5 0 016 10.98V14h8V6h-3.02zm5.52-2c-.83 0-1.5.67-1.5 1.5v9a1.5 1.5 0 003 0v-9c0-.83-.67-1.5-1.5-1.5z"/>
    </svg>);
}
export default PipelineArrowCurveDownIcon;
