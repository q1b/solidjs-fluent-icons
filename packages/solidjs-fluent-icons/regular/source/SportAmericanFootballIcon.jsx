import { splitProps } from "solid-js";
function SportAmericanFootballIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.85 8.85a.5.5 0 10-.7-.7l-3 3a.5.5 0 10.7.7l3-3zM18 4.23A2.25 2.25 0 0015.7 2c-5.62.07-9.12 2.15-11.18 4.96-2.04 2.78-2.6 6.2-2.51 8.88.04 1.18 1 2.09 2.15 2.14 5.53.26 9.03-1.73 11.13-4.56 2.07-2.8 2.73-6.36 2.71-9.2zM15.71 3c.72 0 1.29.54 1.3 1.23 0 .9-.07 1.86-.23 2.84l-3.84-3.84C13.79 3.09 14.7 3 15.7 3zm-3.95.46l4.79 4.8c-.39 1.6-1.04 3.19-2.07 4.56a10.01 10.01 0 01-6.1 3.85.5.5 0 00-.03-.02l-4.93-4.93a11.8 11.8 0 011.9-4.17 10.8 10.8 0 016.44-4.09zM3.19 12.9l3.98 3.99c-.9.11-1.89.15-2.96.1A1.24 1.24 0 013 15.81c-.03-.91.02-1.9.18-2.92z"/>
    </svg>);
}
export default SportAmericanFootballIcon;
