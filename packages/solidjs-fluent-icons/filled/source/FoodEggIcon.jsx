import { splitProps } from "solid-js";
function FoodEggIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.47 9.6a.5.5 0 00.14-.98 2.14 2.14 0 00-2.35 2.16.5.5 0 001 0c0-.8.7-1.24 1.2-1.17zM3.99 7.14c-2.41 1.91-2.48 5.15-1.34 7.32a4.89 4.89 0 004.42 2.77c.54 0 .94-.01 1.24-.03.94-.03 1.11-.04 2.42.48a5.6 5.6 0 005.12-.47c1.39-.87 2.19-2.88 2.05-4.52-.08-.98 0-1.36.09-1.86.06-.33.13-.7.17-1.34a7.1 7.1 0 00-1.05-3.81 7.63 7.63 0 00-2.72-2.85 6.18 6.18 0 00-5.86-.15 7.15 7.15 0 00-3.07 3 5.1 5.1 0 01-1.47 1.46zm10.91 3.33a4.5 4.5 0 11-8.99 0 4.5 4.5 0 018.99 0z"/>
    </svg>);
}
export default FoodEggIcon;
