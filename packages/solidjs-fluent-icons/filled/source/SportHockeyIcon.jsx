import { splitProps } from "solid-js";
function SportHockeyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.97 2.06a3.7 3.7 0 013.45 1.3l1.71 1.93c.75.84 1.08 2.02.73 3.13-2.1 6.7-7.03 9.08-10.19 9.55-.9.14-1.76-.22-2.39-.78l-1.8-1.6A4.07 4.07 0 012.2 11.2c2.12-5.99 6.46-8.47 9.76-9.15zm2.52 3.52a.5.5 0 10-.98-.16 10.9 10.9 0 01-3.05 5.9 10.32 10.32 0 01-4.1 2.7.5.5 0 10.28.96c1.25-.36 3-1.38 4.53-2.96a11.89 11.89 0 003.32-6.44z"/>
    </svg>);
}
export default SportHockeyIcon;
