import { splitProps } from "solid-js";
function SleepIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.16 2.74a.5.5 0 01.43-.13c3.5.6 6.4 3.67 6.4 7.39a7.5 7.5 0 01-7.5 7.5 7.96 7.96 0 01-6.4-3.21.5.5 0 01.37-.79 6.94 6.94 0 004.69-2.59c1.34-1.65 2.24-4.17 1.85-7.75a.5.5 0 01.16-.42zM3.5 10C4.33 10 5 9.33 5 8.5V4.89l3-.75v1.95A1.5 1.5 0 109 7.5v-4a.5.5 0 00-.62-.49l-4 1A.5.5 0 004 4.5v2.59A1.5 1.5 0 103.5 10z"/>
    </svg>);
}
export default SleepIcon;
