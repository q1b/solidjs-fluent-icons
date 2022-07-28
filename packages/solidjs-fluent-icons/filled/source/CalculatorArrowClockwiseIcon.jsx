import { splitProps } from "solid-js";
function CalculatorArrowClockwiseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 2h-7A2.5 2.5 0 004 4.5v11A2.5 2.5 0 006.5 18h3.77a5.48 5.48 0 01-.64-6.07 1 1 0 111.17-1.52A5.48 5.48 0 0116 9.19V4.5A2.5 2.5 0 0013.5 2zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 6.5v-1C6 4.67 6.67 4 7.5 4zm.5 7a1 1 0 11-2 0 1 1 0 012 0zm0 3a1 1 0 11-2 0 1 1 0 012 0zm9.5-1.52a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.76a4.5 4.5 0 102 3.74.5.5 0 10-1 0 3.5 3.5 0 11-1.7-3h-.8a.5.5 0 100 1h2z"/>
    </svg>);
}
export default CalculatorArrowClockwiseIcon;
