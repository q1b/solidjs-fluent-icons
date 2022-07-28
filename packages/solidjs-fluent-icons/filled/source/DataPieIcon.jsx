import { splitProps } from "solid-js";
function DataPieIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 118 4.07zM17.06 10c.5 0 .93-.37.94-.86V9a7 7 0 00-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 001 1h6.06z"/>
    </svg>);
}
export default DataPieIcon;
